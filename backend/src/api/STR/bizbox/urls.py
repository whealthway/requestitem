from flask import request
from ....app import app
from .controllers import find_bizbox_code_details_controller

@app.route("/bizbox-str/find-bb-code-desc", methods=['POST'])
def find_bizbox_code_details_str():
    print("request: ", request.get_json())
    if request.method == 'POST': return find_bizbox_code_details_controller()
    else: return 'Method is Not Allowed'

# @app.route('/bizbox_str/callSP/itemSearch', methods=['POST'])
# def call_proc():
#     if request.method == 'POST': return call_stored_procedure_controller()
#     else: return 'Method is Not Allowed'

