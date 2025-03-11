from flask import request, jsonify

from ...app import app
from .controllers import get_all_iwItems_controller, find_iwItems_controller

@app.route("/bizbox_masci/getAlliwItems", methods=['GET'])
def get_all_iwItems():
    if request.method == 'GET': return get_all_iwItems_controller()
    else: return 'Method is Not Allowed'

@app.route("/bizbox_masci/findBbcodeDesc", methods=['POST'])
def find_iwItems():
    if request.method == 'POST': return find_iwItems_controller()
    else: return 'Method is Not Allowed'