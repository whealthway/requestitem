from flask import request, jsonify
from sqlalchemy import func, literal
from .models import SAPOITBItemGrp, SAPUOM, SAP_OITM_MASCI_11152024, AA_ORDERITEM_PROD_11182024, Item
import re


# def tranform_search_result(search_result):
def search_item_request_controller():
    try:
        search_term = request.get_json()['searchItem'].lower()
        items = Item.query

        search_items = items.filter(func.lower(Item.item_name).like(f"%{search_term}%"))
        json_data = []
        if search_items:
            for u in search_items:
                item = u.toDict()
                item['data_source'] = 'In-Progress Item'
                json_data.append(item)
        else:
            json_data = []
            
        return jsonify({"code": 200, "data": json_data})
    
    except Exception as e:
        return jsonify({"code": 401, "message": f"Unexpected Error: {e}"})
    

def get_all_item_group():
    item_groups = SAPOITBItemGrp.query.all()
    response = []
    for item_group in item_groups: response.append(item_group.toDict())

    return jsonify({"code": 200, "data":response})

def get_all_uoms():
    uoms = SAPUOM.query.all()
    response = []
    for uom in uoms: response.append(uom.toDict())

    return jsonify({"code": 200, "data":response})


def get_search_items_sap_controls():
    try:
        search_item= request.get_json()['searchItem']
        items = SAP_OITM_MASCI_11152024.query
        search_item = search_item.replace("[", "").replace("]", "")
        search_items = items.filter(func.lower(SAP_OITM_MASCI_11152024.Description).like(f"%{search_item.lower()}%"))

        json_data = []
        if search_items:
             for u in search_items:
                item = u.toDict()
                item['data_source'] = 'SAP Item'
                json_data.append(item)
        else:
            json_data = []
            
        return jsonify({"code": 200, "data": json_data})

    except Exception as e:
        return jsonify({"code": 401, "message": f"Unexpected Error: {e}"})
    
def get_search_items_aa_controls():
    try:
        search_item= request.get_json()['searchItem'].lower()
        items = AA_ORDERITEM_PROD_11182024.query

        search_items = items.filter(func.lower(AA_ORDERITEM_PROD_11182024.DESCRIPTION).like(f"%{search_item}%"))
        json_data = []
        if search_items:
            for u in search_items:
                item = u.toDict()
                item['data_source'] = 'AA Order Item'
                json_data.append(item) 
        else:
            json_data = []
            
        
        return jsonify({"code": 200, "data": json_data})

    except Exception as e:
        return jsonify({"code": 401, "message": f"Unexpected Error: {e}"})
    


