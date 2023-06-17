# SeaTea
Hackathon project

Clone this repository in a directory that contains
 - `gis_data/plots` that contains QGIS layer definition with plots (acquired from https://geoportal-wms.dg.pl/iip/ows?service=WFS&request=GetCapabilities)
 - Stable Diffusion (https://github.com/AUTOMATIC1111/stable-diffusion-webui) with Realistic Vision V1.4 model (https://huggingface.co/SG161222/Realistic_Vision_V1.4
 added to /models/Stable-diffusion)
 and ControlNet extension (https://github.com/Mikubill/sd-webui-controlnet) with canny model (https://huggingface.co/lllyasviel/ControlNet/blob/main/models/control_sd15_canny.pth
added to /models/ControlNet)
  - enable `Allow other script to control this extension` in ControlNet settings

