from flask import request, jsonify
from ..... import db
import json
from datetime import datetime
from ..models import SAP_ITEM_REQUESTS

def CreateItemRequestController():
    try:
        request_item = dict(request.get_json())
        data = request_item['data']

        date_now = datetime.now()
        formatted_date = date_now.strftime("%Y-%m-%d %H:%M:%S")
        
        new_item = SAP_ITEM_REQUESTS (
            sap_item_group_code = data['sapItemGroupCode'],
            sap_item_group_name = data['sapItemGroupName'],
            item_description    = data['itemDescription'],
            inventory_uom_code  = data['inventoryUOMCode'],
            inventory_uom_name  = data['inventoryUOMName'],
            purchaseable        = data['purchaseable'],
            sellable            = data['sellable'],
            inventorable        = data['inventorable'],
            detailed_item       = json.dumps(data['detailedItem']),
            qualimed_bu          = data['qualimedBU'].upper(),
            department          = data['department'],
            created_by          = data['createdBy'],
            created_at          = formatted_date,
            status              = "Pending"
        )

        db.session.add(new_item)
        db.session.commit()

        return jsonify({"code": 200, "message": "Item created successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})
