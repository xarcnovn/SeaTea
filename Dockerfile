FROM ubuntu:22.04
COPY backend backend
COPY qgis_sources .
ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
run apt update && \
    apt install python3 python3-pip wget apt-utils gnupg software-properties-common libxcb1-dev libxcb-xinerama0 xvfb -y && \
    mkdir -m755 -p /etc/apt/keyrings && \
    wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg && \
    tee /etc/apt/sources.list.d/qgis.sources < qgis_sources && \
    apt update && apt install -y qgis python-qgis qgis-plugin-grass && \
    pip3 install -r backend/requirements.txt
CMD cd backend && python3 main.py --stop-run-sd
