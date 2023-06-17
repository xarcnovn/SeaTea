from flask import Flask
from find_plot import plot_bp
from qgis.core import QgsApplication
from bafalize import bafalize_bp, start_sd

app = Flask(__name__)
app.register_blueprint(plot_bp)
app.register_blueprint(bafalize_bp)


def init_qgis():
    # Initialize QGIS application
    QgsApplication.setPrefixPath('/usr/bin/qgis', True)
    qgs = QgsApplication([], False)
    qgs.initQgis()


if __name__ == '__main__':
    init_qgis()
    #start_sd()
    app.run()
