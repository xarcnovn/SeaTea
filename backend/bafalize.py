import io
import os
import cv2
import base64
import requests
from flask import Blueprint, jsonify, request, send_file
import subprocess
from PIL import Image
from flask_cors import cross_origin

bafalize_bp = Blueprint("bafalize", __name__)


baf_prompt = "european city with a lot of grass, trees, realistic, photograph, ecological-friendly, lush, flowers." \
             "grass and flowers grow on roofs and balconies. asphalt or brick streets are separated from buildings " \
             "with green areas. Wooden benches, harmony. Gray asphalt roads, intersections and pavements. Original buildings " \
             "and roads colors and outline. There is space on the gray road for cars. Narrow but middle high bushes and plants stripes." \
             "flowers between grass. keep original road signs and buildings, don't generate new, HDR, high detail, photorealistic," \
             "realistic, 4k, award, sharp focus, high resolution, high quality"

medium_baf_prompt = \
    'The photography captures a vibrant urban oasis nestled in the heart of a Central European city. ' \
    'Majestic oak and maple trees line the streets, their dense canopies providing shade and a sense of serenity. ' \
    'Towering buildings with ornate facades flank the bustling avenues, showcasing the architectural grandeur of the ' \
    'city. Lush green parks offer respite from the urban hustle, adorned with meticulously manicured gardens featuring ' \
    'rhododendrons, azaleas, and blueberry bushes. The parks are interconnected by well-paved walking paths, inviting ' \
    'residents and visitors to enjoy a leisurely stroll. Colorful wildflowers such as lupines, coneflowers, ' \
    'and black-eyed Susans bloom alongside the paths, attracting the admiration of passersby. Quaint wooden benches ' \
    'and charming fountains provide spots for relaxation amidst the verdant landscape. Bicycles and pedestrians ' \
    'share the well-maintained roads, contributing to the vibrant and eco-friendly atmosphere of the city.'


negative_prompt =  "oversaturated, low contrast, underexposed, overexposed, lowres, low quality, people, pets, cars, " \
                   "animals, solid background, plain background, asymmetrical buildings, jpeg artifacts, close-up, " \
                   "macro, surreal, multiple views, multiple angles, creepy, scary, blurry, grainy, unreal sky, " \
                   "weird colors, deformed structures, grass street, green street, unrealistic, bright buildings, blue buildings, " \
                   "pink building, temple, arch, ancient architecture, skyscraper, glass and concrete building, dome," \
                   "lake, pond, river, puddle"

# A1111 URL
url = "http://127.0.0.1:7860"

sd_path = '../../stable-diffusion-webui'
sd_script = './webui.sh'
sd_options = ' --skip-torch-cuda-test --precision full --no-half --api'


def_payload = {
    "init_images": [""],
    "prompt": baf_prompt,
    "negative_prompt": negative_prompt,
    "batch_size": 1,
    "steps": 20,
    "height": 1024,
    "width": 1024,
    "cfg_scale": 7,
    "alwayson_scripts": {
        "controlnet": {
            "args": [
                {
                    "input_image": "",
                    "module": "canny",
                    "model": "control_sd15_canny",
                }
            ]
        }
    }
}


def fill_payload(prompt):
    new_payload = def_payload
    new_payload["prompt"] = prompt

    image = cv2.imread("api_img.jpg", cv2.IMREAD_COLOR)
    retval, bytes = cv2.imencode('.png', image)
    encoded_image = base64.b64encode(bytes).decode('utf-8')

    init = cv2.imread("SD_input.jpg", cv2.IMREAD_COLOR)
    retval, bytes = cv2.imencode('.png', init)
    init_encoded_image = base64.b64encode(bytes).decode('utf-8')

    new_payload["alwayson_scripts"]["controlnet"]["args"][0]["input_image"] = encoded_image
    new_payload["init_images"][0] = init_encoded_image
    return new_payload


@bafalize_bp.route('/bafalize', methods=['POST'])
@cross_origin()
def bafalize_img():
    if 'file' in request.files:
        img = request.files['file']

        img.save("api_img.jpg")

        payload = fill_payload(medium_baf_prompt)
        response = requests.post(url=f'{url}/sdapi/v1/img2img', json=payload)

        # Read results
        r = response.json()
        result = r['images'][0]
        image = Image.open(io.BytesIO(base64.b64decode(result.split(",", 1)[0])))
        image.save('output.png')

        return send_file('output.png', mimetype="image/jpeg")
    else:
        return jsonify({'message': 'no image'}), 400


os.environ['QT_QPA_PLATFORM_PLUGIN_PATH'] = '/usr/lib/x86_64-linux-gnu/qt5/plugins'

cmd = 'gnome-terminal -- bash -c \"' + 'cd ' + sd_path + ' && ' + sd_script + sd_options + '\"'


def start_sd():
    subprocess.Popen(cmd, shell=True)
