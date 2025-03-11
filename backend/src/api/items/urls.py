from flask import request, jsonify

from ...app import app
from .controllers import list_all_items_controller, create_item_controller, search_item, retrieve_item_controller, update_item_controller, delete_item_controller, get_all_item_group, get_all_uoms, list_all_iwItems_items_controller
from .models import SAP_UOM, QReportsModel, BizboxMasciModel

@app.route("/items", methods=['GET', 'POST'])
def list_create_items():
    if request.method == 'GET': return list_all_items_controller()
    if request.method == 'POST': return create_item_controller()
    else: return 'Method is Not Allowed'

@app.route("/iwItems", methods=['GET', 'POST'])
def list_iw_items():
    if request.method == 'GET': return list_all_iwItems_items_controller()
    else: return 'Method is Not Allowed'

@app.route("/items/search", methods=['POST'])
def find_item():
    if request.method == 'POST': return search_item()
    else: return 'Method is not allowed'

@app.route("/itemgroup", methods=['GET'])
def get_item_group():
    if request.method == 'GET': return get_all_item_group()
    else: return 'Method is not allowed'

@app.route("/uoms", methods=['GET'])
def get_uoms():
    if request.method == 'GET': return get_all_uoms()
    else: return 'Method is not allowed'

@app.route("/items/<item_id>", methods=['GET', 'PUT', 'DELETE'])
def retrieve_update_destroy_items(item_id):
    if request.method == 'GET': return retrieve_item_controller(item_id)
    if request.method == 'PUT': return update_item_controller(item_id)
    if request.method == 'DELETE': return delete_item_controller(item_id)
    else: return 'Method is Not Allowed'


@app.route("/")
def home():
    return jsonify({"message": "Flask with multiple databases"})

# Query data from different databases
@app.route("/bbtemp")
def get_bbtemp_data():
    if request.method == 'GET':
        # data = BbTempModel.query.limit(5).all()
        # return jsonify([{"UOMAbs": row.UOMAbs, "name": row.UOMCdoe} for row in data])
        uoms = SAP_UOM.query.all()
        response = []
        for uom in uoms: response.append(uom.toDict())

        return jsonify({"code": 200, "data":response})

@app.route("/qreports")
def get_qreports_data():
    if request.method == 'GET':
        data = QReportsModel.query.limit(5).all()
        return jsonify([{"id": row.id, "report_data": row.report_data} for row in data])

@app.route("/bizbox_masci")
def get_bizbox_data():
    if request.method == 'GET':
    
        items = BizboxMasciModel.query.all()
        response = []
        for item in items: response.append(item.toDict())

        return jsonify({"code": 200, "data":response})
