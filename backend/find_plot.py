from qgis.core import QgsVectorLayer, QgsGeometry, QgsRectangle, QgsCoordinateReferenceSystem, QgsCoordinateTransform, QgsCoordinateTransformContext
import svgwrite
from flask import Blueprint, jsonify, request

plot_bp = Blueprint("plots", __name__)
# TODO: response codes

# TODO: move paths to a config. Use default names from GIS
plot_layer_file = 'shp/plots.shp'
address_layer_file = 'shp/addresses.shp'

def cut_into_pieces(feature, count):
    geometry = feature.geometry()
    # Calculate the target area for each division
    total_area = geometry.area()
    target_area = total_area / count

    # Initialize variables
    y_coordinates = []
    y_min, y_max = geometry.boundingBox().yMinimum(), geometry.boundingBox().yMaximum()
    y_step = (y_max - y_min) / 1000  # Adjust the step size as needed
    y_current = y_min
    cumulative_area = 0

    while y_current <= y_max and len(y_coordinates) < count:
        # Calculate the area up to the current y-coordinate
        rect = QgsGeometry.fromRect(QgsRectangle(geometry.boundingBox().xMinimum(), y_min, geometry.boundingBox().xMaximum(), y_current))
        intersection = geometry.intersection(rect)

        if not intersection.isEmpty():
            area = intersection.area()

            # Check if the cumulative area exceeds or equals the target area
            if cumulative_area + area >= target_area:
                y_coordinates.append(y_current)
                cumulative_area = 0  # Reset the cumulative area

            cumulative_area += area

        # Increment the y-coordinate
        y_current += y_step

    # Create the sliced polygons
    slices = []
    for i in range(len(y_coordinates) - 1):
        y_start = y_coordinates[i]
        y_end = y_coordinates[i + 1]

        plot_slice = QgsGeometry.fromRect(QgsRectangle(geometry.boundingBox().xMinimum(), y_start, geometry.boundingBox().xMaximum(), y_end))
        slice_intersection = geometry.intersection(plot_slice)
        if not slice_intersection.isEmpty():
            slice_polygon = slice_intersection.asPolygon()[0]  # Extract the outer ring of the polygon
            slices.append(slice_polygon)

    # Create an SVG document
    dwg = svgwrite.Drawing('output_file', profile='tiny')

    # Save the slices as SVG polygons
    for i, slice_polygon in enumerate(slices):
        # Extract the points from the exterior ring
        points = [(point.x(), point.y()) for point in slice_polygon.exterior().coords()]
        # Create a polygon shape
        svg_polygon = svgwrite.shapes.Polygon(points, fill="none", stroke="black")
        # Add the polygon shape to the drawing
        dwg.add(svg_polygon)

    # Save the SVG document to the output file
    dwg.save()

    # Print completion message
    print('Shape division complete')


@plot_bp.route('/plot_data/search_by_ids', methods=['GET'])
def get_plot_area_by_id():
    plot_id = request.args.get('plot_id')
    district_id = request.args.get('district_id')
    print(plot_id, district_id)
    if request.method == 'GET':
        # Load the hood layer
        plot_layer = QgsVectorLayer(plot_layer_file, 'layer', 'ogr')

        # Check if the layer loaded successfully
        if not plot_layer.isValid():
            return jsonify({'message': 'Failed to open plot map'}), 400

        for feature in plot_layer.getFeatures():
            attrs = feature.attributes()
            if plot_id in attrs and district_id in attrs:
                print("found")
                area = feature.geometry().area()
                print("area: ", area)
                #cut_into_pieces(feature, 100)
                return jsonify({'area': area}), 200

        response = jsonify({'message': 'Plot not found', 'options_passthrough': False})
        return response, 404


@plot_bp.route('/plot_data/search_by_address', methods=['GET'])
def get_plot_area_by_address():
    if request.method == 'GET':
        street = request.args.get('street')
        number = request.args.get('number')
        print(street, number)

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
                if street in attrs and number in attrs:
                    found_feature = address
                    break  # Exit the loop once a match is found

            if found_feature is not None:
                # Perform operations with the found feature
                print("Found feature with ID: " + str(found_feature.id()))
                # Iterate over the polygon features
                for polygon_feature in plot_layer.getFeatures():
                    polygon_geometry = polygon_feature.geometry()
                    #print(polygon_geometry)

                    if polygon_geometry.contains(found_feature.geometry()):
                        print("Point " + str(found_feature.id()) + " is inside Polygon " + \
                              polygon_feature['NUMER_OBRE'] + ", " + polygon_feature['NUMER_DZIA'])
                        return jsonify({'id': found_feature.id(), 'area': polygon_feature.geometry().area()}), 200

                else:
                    print(f"No polygon found for Point {found_feature.id()}")
                    return jsonify({'message': 'layers error'}), 400
            else:
                print('No feature matching the specified attributes found')
                return jsonify({'message': 'layers error'}), 400
