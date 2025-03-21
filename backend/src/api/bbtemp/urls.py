from flask import request, jsonify
from ...app import app
from .controllers import SearchItemRequestController, GetAllUOMSController, GetAllSAPItemGroupController, CreateItemRequestController

@app.route("/bbtemp/itemgroup", methods=['GET'])
def get_all_item_group():
    if request.method == 'GET': return GetAllSAPItemGroupController()
    else: return 'Method is not allowed'

@app.route("/bbtemp/uoms", methods=['GET'])
def get_all_uoms():
    if request.method == 'GET': return GetAllUOMSController()
    else: return 'Method is not allowed'

@app.route("/bbtemp/create-item-request", methods=['POST'])
def create_item():
    if request.method == 'POST': return CreateItemRequestController()
    else: return 'Method is Not Allowed'
    
@app.route("/bbtemp/searchItemSAP", methods=['POST'])
def get_search_items_sap():
    if request.method == 'POST': return SearchItemRequestController()
    else: return 'Method is not allowed'