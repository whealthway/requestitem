
from flask import request, jsonify
from sqlalchemy import func
from ..models import SAP_ITEM_REQUESTS
def SearchItemRequestController():
    try:
        search_term = request.get_json()['searchItem'].lower()
        items = SAP_ITEM_REQUESTS.query

        search_items = items.filter(func.lower(SAP_ITEM_REQUESTS.item_description).like(f"%{search_term}%"))
        json_data = []
        if search_items:
            for u in search_items:
                item = u.toDict()
                item['data_source'] = 'In-Progress Item'
                json_data.append({
                    "id"               : item['item_id'],
                    "data_source"      : "Current Request",
                    "bb_code"          : item['bb_code'],
                    "sap_code"         : item['sap_code'],
                    "aa_order_item"    : item['aa_order_item'],
                    "aa_item_master"   : item['aa_item_master'],
                    "item_description" : item['item_description'],
                    "request_details"  : f"{item['qualimed_bu']} / {item['department']} / {item['created_by']} / {item['created_at']}",
                    "status"           : item['status']
                })
        else:
            json_data = []
            
        return jsonify({"code": 200, "data": json_data})
    
    except Exception as e:
        return jsonify({"code": 401, "message": f"Unexpected Error: {e}"})
