https://qgis.org/pl/site/forusers/alldownloads.html#debian-ubuntu


Installing requirements

run
```commandline
sudo apt install gnupg software-properties-common
sudo mkdir -m755 -p /etc/apt/keyrings  # not needed since apt version 2.4.0 like Debian 12 and Ubuntu 22 or newer
sudo wget -O /etc/apt/keyrings/qgis-archive-keyring.gpg https://download.qgis.org/downloads/qgis-archive-keyring.gpg
sudo gedit /etc/apt/sources.list.d/qgis.sources
```

in `gedit` paste:
```commandline
Types: deb deb-src
URIs: https://qgis.org/debian
Suites: your-distributions-codename
Architectures: amd64
Components: main
Signed-By: /etc/apt/keyrings/qgis-archive-keyring.gpg
```

```commandline
sudo apt update
sudo apt install qgis qgis-plugin-grass
pip3 install -r requirements.txr
```


