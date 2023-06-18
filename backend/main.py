from flask import Flask
from find_plot import plot_bp
from qgis.core import QgsApplication
from bafalize import bafalize_bp, start_sd
from flask_cors import CORS
import argparse

app = Flask(__name__)
app.register_blueprint(plot_bp)
app.register_blueprint(bafalize_bp)
cors = CORS(app, origins='*',  methods=['GET', 'POST'],  headers=['Content-Type'])
app.config['CORS_HEADERS'] = 'Content-Type'


def init_qgis():
    QgsApplication.setPrefixPath('/usr/bin/qgis', True)
    qgs = QgsApplication([], False)
    qgs.initQgis()


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="BAF calculator app - server backend")
    parser.add_argument("--stop-run-sd", action="store_true", help="Suspend Stable Diffusion running with server start.")
    args = parser.parse_args()
    print(args.stop_run_sd)

    init_qgis()
    if not args.stop_run_sd:
        start_sd()
    app.run()
