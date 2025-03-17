from flask import request, jsonify
from ...app import app
from .controllers import find_bizbox_code_details_controller, call_stored_procedure_controller

# @app.route("/bizbox_masci/getAlliwItems", methods=['GET'])
# def get_all_iwItems():
#     if request.method == 'GET': return get_all_iwItems_controller()
#     else: return 'Method is Not Allowed'

@app.route("/bizbox_masci/findBbcodeDesc", methods=['POST'])
def find_bizbox_code_details():
    if request.method == 'POST': return find_bizbox_code_details_controller()
    else: return 'Method is Not Allowed'

@app.route('/bizbox_masci/callSP/itemSearch', methods=['POST'])
def call_proc():
    if request.method == 'POST': return call_stored_procedure_controller()
    else: return 'Method is Not Allowed'
