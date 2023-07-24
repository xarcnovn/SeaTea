from flask import Flask
from flask_cors import CORS
from bafalize import bafalize_bp#, start_sd
import argparse
import os

app = Flask(__name__)
CORS(app)
app.register_blueprint(bafalize_bp)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="BAF calculator app - server backend")
    parser.add_argument("--stop-run-sd", action="store_true", help="Suspend Stable Diffusion running with server start.")
    args = parser.parse_args()
    os.environ["QT_QPA_PLATFORM"] = "offscreen"
    #if not args.stop_run_sd:
    #    start_sd()
    app.run(host='0.0.0.0', port=5003)
