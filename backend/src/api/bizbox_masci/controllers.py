from flask import request, jsonify
from .models import iwItems
from sqlalchemy import func

# ----------------------------------------------- #
def get_all_iwItems_controller():
    items = iwItems.query.all()
    response = []
    for item in items: response.append(item.toDict())

    return jsonify({"code": 200, "data":response})

def find_iwItems_controller():
    bb_code = request.get_json()['bizboxCode'].lower()
    print(bb_code)

    items = iwItems.query
    # item = iwItems.query.get({"PK_iwItems": bb_code})
    results = items.filter(func.lower(iwItems.PK_iwItems).like(bb_code))

    if results:
        json_data = [u.toDict() for u in results]
    else:
        json_data = []

    return jsonify({"code": 200, "data":json_data[0]})
