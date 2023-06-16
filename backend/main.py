from flask import Flask
from find_plot import plot_bp
from qgis.core import QgsApplication

app = Flask(__name__)
app.register_blueprint(plot_bp)


def init_qgis():
    # Initialize QGIS application
    QgsApplication.setPrefixPath('/usr/bin/qgis', True)
    qgs = QgsApplication([], False)
    qgs.initQgis()


if __name__ == '__main__':
    init_qgis()
    app.run()
