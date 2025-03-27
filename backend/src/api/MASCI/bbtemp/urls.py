from flask import request
from ....app import app
from .controllers import SearchItemRequestController, GetAllUOMSController, GetAllSAPItemGroupController, CreateItemRequestController, UpdateItemCodeController



@app.route("/bbtemp-masci/item-group", methods=['GET'])
def get_all_item_group_masci():
    if request.method == 'GET': return GetAllSAPItemGroupController()
    else: return 'Method is not allowed'

@app.route("/bbtemp-masci/uoms", methods=['GET'])
def get_all_uoms_masci():
    if request.method == 'GET': return GetAllUOMSController()
    else: return 'Method is not allowed'

@app.route("/bbtemp-masci/create-item-request", methods=['POST'])
def create_item_masci():
    if request.method == 'POST': return CreateItemRequestController()
    else: return 'Method is Not Allowed'
    
@app.route("/bbtemp-masci/search-item-sap", methods=['POST'])
def get_search_items_sap_masci():
    if request.method == 'POST': return SearchItemRequestController()
    else: return 'Method is not allowed'

@app.route("/bbtemp-masci/update-item-request", methods=['POST'])
def update_item_code_masci():
    if request.method == 'POST': return UpdateItemCodeController()