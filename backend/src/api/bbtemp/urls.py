from flask import request, jsonify
from ...app import app
from .controllers import get_all_item_group, get_all_uoms, get_search_items_sap_controls, get_search_items_aa_controls, search_item_request_controller


@app.route("/bbtemp/items", methods=['POST'])
def list_create_items():
    if request.method == 'POST': return search_item_request_controller()
    else: return 'Method is Not Allowed'

@app.route("/bbtemp/itemgroup", methods=['GET'])
def get_item_group():
    if request.method == 'GET': return get_all_item_group()
    else: return 'Method is not allowed'

@app.route("/bbtemp/uoms", methods=['GET'])
def get_uoms():
    if request.method == 'GET': return get_all_uoms()
    else: return 'Method is not allowed'

@app.route("/bbtemp/searchItemSAP", methods=['POST'])
def get_search_items_sap():
    if request.method == 'POST': return get_search_items_sap_controls()
    else: return 'Method is not allowed'

@app.route("/bbtemp/searchItemAA", methods=['POST'])
def get_search_items_aa():
    if request.method == 'POST': return get_search_items_aa_controls()
    else: return 'Method is not allowed'
