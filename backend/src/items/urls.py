from flask import request

from ..app import app
from .controllers import list_all_items_controller, create_item_controller, search_item, retrieve_item_controller, update_item_controller, delete_item_controller, get_all_item_group, get_all_uoms

@app.route("/items", methods=['GET', 'POST'])
def list_create_items():
    if request.method == 'GET': return list_all_items_controller()
    if request.method == 'POST': return create_item_controller()
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