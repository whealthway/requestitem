from flask import request
from ....app import app
from .controllers import SearchItemRequestController, CreateItemRequestController

@app.route("/bbtemp-sjdm/create-item-request", methods=['POST'])
def create_item_sjdm():
    if request.method == 'POST': return CreateItemRequestController()
    else: return 'Method is Not Allowed'
    
@app.route("/bbtemp-sjdm/search-item-sap", methods=['POST'])
def get_search_items_sap_sjdm():
    if request.method == 'POST': return SearchItemRequestController()
    else: return 'Method is not allowed'