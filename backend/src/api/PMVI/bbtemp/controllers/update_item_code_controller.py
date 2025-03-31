from flask import request, jsonify
from ..... import db
import json
from datetime import datetime
from ..models import SAP_ITEM_REQUESTS

def UpdateItemCodeController():
    try:
        request_item = dict(request.get_json())
        data = request_item['data']
        print(data)
        date_now = datetime.now()
        date_now_without_seconds = date_now.replace(second=0, microsecond=0)
        formatted_datetime = date_now_without_seconds.strftime("%Y-%m-%d %H:%M")

        items = SAP_ITEM_REQUESTS.query

        items.filter_by(item_id=data['itemId']).update({
            "item_code"        : data['itemCode'],
            "sap_code"         : data['itemCode'],
            "aa_order_item"    : data['itemCode'],
            "aa_item_master"   : data['itemCode'],
            "item_description" : data['itemDescription'],
            "updated_by"       : "1",
            "updated_at"       : formatted_datetime,
            "status"           : "Done"
        })

        db.session.commit()

        return jsonify({"code": 200, "message": "Item created successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})
