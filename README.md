# SeaTea
Hackathon project calculating BAF in Dąbrowa Górnicza.

## Installation

Clone this repository in a directory that contains
 - `gis_data/plots` that contains QGIS layer definition with plots (acquired from https://geoportal-wms.dg.pl/iip/ows?service=WFS&request=GetCapabilities)
 - Stable Diffusion (https://github.com/AUTOMATIC1111/stable-diffusion-webui) with Realistic Vision V1.4 model (https://huggingface.co/SG161222/Realistic_Vision_V1.4
 added to /models/Stable-diffusion)
 and ControlNet extension (https://github.com/Mikubill/sd-webui-controlnet) with canny model (https://huggingface.co/lllyasviel/ControlNet/blob/main/models/control_sd15_canny.pth
added to /models/ControlNet). Enable `Allow other script to control this extension` in ControlNet settings

```commandline
Project
+---- gis_data
|     +---- plots
+---- stable_diffusion_webui
      +---- models
            +---- ControlNet
            |     +---- control_sd15_canny.pth
            +---- Stable-diffusion
                  +---- Realistic_Vision_V1.4.ckpt
```

1. Download and install QGIS: https://qgis.org/pl/site/forusers/alldownloads.html#debian-ubuntu

2. Install required Python packages

```
pip3 install -r backend/requirements.txt
```

3. Install Node.js v18: https://techviewleo.com/how-to-install-node-js-18-lts-on-ubuntu/

4. Run 
```commandline
cd frontend
npm i
```

## Running

To run server backed, open a terminal in `SeaTea` directory and run `python3 backend/main.py`

To run frontend, run `npm run dev`


### Useful links
https://www.wodgik.katowice.pl/www/pobierz/VADEMECUM_UZYTKOWNIKA_BDOT10k.pdf
https://stablediffusionapi.com/docs/
https://mapy.geoportal.gov.pl/imap/Imgp_2.html?gpmap=gp0
