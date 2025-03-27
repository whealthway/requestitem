from flask import request
from ....app import app
from .controllers import find_bizbox_code_details_controller, call_stored_procedure_controller, get_msc_branches_controller

@app.route("/bizbox-masci/find-bb-code-desc", methods=['POST'])
def find_bizbox_code_details_masci():
    print("request: ", request.get_json())
    if request.method == 'POST': return find_bizbox_code_details_controller()
    else: return 'Method is Not Allowed'

@app.route('/bizbox-masci/callSP/item-search', methods=['POST'])
def call_proc_masci():
    if request.method == 'POST': return call_stored_procedure_controller()
    else: return 'Method is Not Allowed'

@app.route('/bizbox-masci/get-branches', methods=['GET'])
def call_proc1():
    if request.method == 'GET': return get_msc_branches_controller()
    else: return 'Method is Not Allowed'


