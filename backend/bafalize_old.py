import json
import base64
import requests
from Flask import jsonify, request


@app.route('/images', method=['POST', 'GET', 'DELETE'])
def handle_image():
    if request.method == 'POST':
        if 'image' in request.files:
            image_file = request.files['image']
            # Process the image file as needed
            # Example: Save the image to a local directory
            image_file.save('path/to/save/image.jpg')
            return {'message': 'Image uploaded successfully'}
        else:
            return {'error': 'No image file provided'}
    elif request.method == 'GET':
        # Load the image file
        image_path = "/path/to/image.jpg"

        # Send the image file in the response
        return send_file(image_path, mimetype="image/jpeg")


def submit_post(url: str, data: dict):
    """
    Submit a POST request to the given URL with the given data.
    """
    return requests.post(url, data=json.dumps(data))


def save_encoded_image(b64_image: str, output_path: str):
    """
    Save the given image to the given output path.
    """
    with open(output_path, "wb") as image_file:
        image_file.write(base64.b64decode(b64_image))


if __name__ == '__main__':
    txt2img_url = 'http://127.0.0.1:7861/sdapi/v1/txt2img'
    data = {'prompt': 'a dog wearing a hat'}
    response = submit_post(txt2img_url, data)
    save_encoded_image(response.json()['images'][0], 'dog.png')
