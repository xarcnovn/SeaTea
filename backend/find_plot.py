from qgis.core import QgsVectorLayer
from flask import Blueprint, jsonify, request
from flask_cors import cross_origin

plot_bp = Blueprint("plots", __name__)

plot_layer_file = '../../gis_data/plots/plots.shp'
address_layer_file = '../../gis_data/address/PRG_PunktyAdresowe_246501.shp'


@plot_bp.route('/plot_area/id/<plot_id>', methods=['GET'])
@cross_origin()
def get_plot_area_by_id(plot_id):
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

        response = jsonify({'message': 'Plot not found', 'options_passthrough': False})
        #response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('ngrok-skip-browser-warning', "true")
        return response, 404


@plot_bp.route('/plot_address/address', methods=['GET'])
@cross_origin()
def get_plot_area_by_address():
    if request.method == 'GET':
        ulica = request.json.get('street')
        nr = request.json.get('number')

        # Load the hood layer
        plot_layer = QgsVectorLayer(plot_layer_file, 'polygons', 'ogr')
        address_layer = QgsVectorLayer(address_layer_file, 'points', 'ogr')

        # Check if the layers loaded successfully
        if not plot_layer.isValid() or not address_layer.isValid():
            print('Layers failed to load!')
            return jsonify({'message': 'layers error'}), 400
        else:
            # Initialize the found feature variable
            found_feature = None

            # Iterate through the features in the layer
            for address in address_layer.getFeatures():
                # Get the attribute values of the feature
                attrs = address.attributes()
                if ulica in attrs and nr in attrs:
                    found_feature = address
                    break  # Exit the loop once a match is found

            if found_feature:
                # Perform operations with the found feature
                print("Found feature with ID: " + str(found_feature.id()))

                # Iterate over the polygon features
                for polygon_feature in plot_layer.getFeatures():
                    polygon_geometry = polygon_feature.geometry()

                    # Check if the point is inside the polygon
                    if polygon_geometry.contains(found_feature.geometry()):
                        print("Point " + str(found_feature.id()) + " is inside Polygon " + polygon_feature['NUMER_DZIA'])
                        return jsonify({'id': found_feature.id(), 'area': polygon_feature.geometry().area()}), 200

                else:
                    print(f"No polygon found for Point {found_feature.id()}")
                    return jsonify({'message': 'layers error'}), 400
            else:
                print('No feature matching the specified attributes found')
                return jsonify({'message': 'layers error'}), 400
