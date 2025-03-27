from flask import request
from ....app import app
from .controllers import find_bizbox_code_details_controller

@app.route("/bizbox-dmmc/find-bb-code-desc", methods=['POST'])
def find_bizbox_code_details_dmmc():
    print("request: ", request.get_json())
    if request.method == 'POST': return find_bizbox_code_details_controller()
    else: return 'Method is Not Allowed'