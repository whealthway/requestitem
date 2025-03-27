from flask import request
from ....app import app
from .controllers import SearchItemRequestController, CreateItemRequestController

@app.route("/bbtemp-str/create-item-request", methods=['POST'])
def create_item_str():
    if request.method == 'POST': return CreateItemRequestController()
    else: return 'Method is Not Allowed'
    
@app.route("/bbtemp-str/search-item-sap", methods=['POST'])
def get_search_items_sap_str():
    if request.method == 'POST': return SearchItemRequestController()
    else: return 'Method is not allowed'