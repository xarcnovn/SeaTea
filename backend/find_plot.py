from qgis.core import QgsVectorLayer
from flask import Blueprint, jsonify, request

plot_bp = Blueprint("plots", __name__)

plot_layer_file = '../../gis_data/plots.shp'


@plot_bp.route('/plot_number/<plot_id>', methods=['GET'])
def get_plot_area(plot_id):
    if request.method == 'GET':
        # Load the hood layer
        plot_layer = QgsVectorLayer(plot_layer_file, 'layer', 'ogr')

        # Check if the layer loaded successfully
        if not plot_layer.isValid():
            return jsonify({'message': 'Failed to open plot map'}), 400

        for feature in plot_layer.getFeatures():
            attrs = feature.attributes()
            if plot_id in attrs:
                print("found")
                area = feature.geometry().area()
                print("area: ", area)
                return jsonify({'area': area}), 200

        return jsonify({'message': 'Plot not found'}), 400
