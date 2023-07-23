from flask import Flask
from flask_cors import CORS
from find_plot import plot_bp
from qgis.core import QgsApplication
from bafalize import bafalize_bp#, start_sd
import argparse
import os

app = Flask(__name__)
CORS(app)
app.register_blueprint(plot_bp)
app.register_blueprint(bafalize_bp)

# TODO: endpoint+db for calculator categories


def init_qgis():
    QgsApplication.setPrefixPath('/usr/bin/qgis', True)
    qgs = QgsApplication([], GUIenabled=False)
    qgs.initQgis()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="BAF calculator app - server backend")
    parser.add_argument("--stop-run-sd", action="store_true", help="Suspend Stable Diffusion running with server start.")
    args = parser.parse_args()
    os.environ["QT_QPA_PLATFORM"] = "offscreen"
    init_qgis()
    #if not args.stop_run_sd:
    #    start_sd()
    app.run(host='0.0.0.0', port=5001)
