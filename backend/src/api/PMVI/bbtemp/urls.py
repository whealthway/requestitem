from flask import request
from ....app import app
from .controllers import SearchItemRequestController, CreateItemRequestController, UpdateItemCodeController

@app.route("/bbtemp-pmvi/create-item-request", methods=['POST'])
def create_item_pmvi():
    if request.method == 'POST': return CreateItemRequestController()
    else: return 'Method is Not Allowed'
    
@app.route("/bbtemp-pmvi/search-item-sap", methods=['POST'])
def get_search_items_sap_pmvi():
    if request.method == 'POST': return SearchItemRequestController()
    else: return 'Method is not allowed'

@app.route("/bbtemp-pmvi/update-item-request", methods=['POST'])
def update_item_code_pmvi():
    if request.method == 'POST': return UpdateItemCodeController()