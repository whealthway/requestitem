from flask import request, jsonify
from sqlalchemy import or_, func
from datetime import datetime

from .. import db
from .models import Item, SAPOITBItemGrp, SAPUOM, iwItems

# ----------------------------------------------- #

# Query Object Methods => https://docs.sqlalchemy.org/en/14/orm/query.html#sqlalchemy.orm.Query
# Session Object Methods => https://docs.sqlalchemy.org/en/14/orm/session_api.html#sqlalchemy.orm.Session
# How to serialize SqlAlchemy PostgreSQL Query to JSON => https://stackoverflow.com/a/46180522


def list_all_items_controller():
    items = Item.query.all()
    response = []
    for item in items: response.append(item.toDict())

    return jsonify({"code": 200, "data":response})

def list_all_iwItems_items_controller():
    items = iwItems.query.all()
    response = []
    for item in items: response.append(item.toDict())

    return jsonify({"code": 200, "data":response})

def create_item_controller():

    try:
        request_item = dict(request.get_json())
        data = request_item['data']

        generic_name, uom, measurement, uom_code, item_name, uom_name = '', '', '', '', '', ''
        print(data['unitOfMeasure1'])
        # generic name + generic name + ... [Brand Name] measure uom/measure uom receptacle other descriptor mfg
        itemNameCount = data['itemNameCount']
        for x in range(1, itemNameCount + 1):
            generic_name += f"{data[f"genericName{x}"]} {'+ ' if x < itemNameCount else ''}"
            # item_name    += f"{data[f"genericName{x}"] }"
            uom          += f"{data[f"measurement{x}"]} {data[f"unitOfMeasure{x}"]}{'/' if x < itemNameCount else ''}"
            measurement  += f"{data[f"measurement{x}"]}{'+' if x < itemNameCount else ''}"
            # item_name    += f"{data[f"measurement{x}"] }"
            uom_code     += f"{data[f"unitOfMeasure{x}"]}{'+' if x < itemNameCount else ''}"
            uom_name     += f"{data[f"unitOfMeasure{x}"]}{'+' if x < itemNameCount else ''}"
            # item_name    += f"{data[f"unitOfMeasure{x}"]['label'] } {'+' if x < itemNameCount else ''} "



        new_item = Item (
            item_code         = data['itemCode'],
            date_requested    = datetime.fromisoformat(data['dateRequested'].replace("Z", "+00:00")),
            requested_by_id   = data['requestedById'],
            requested_by      = data['requestedBy'],
            item_group_code   = data['itemGroupCode']['value'],
            item_group_name   = data['itemGroupCode']['label'],
            qualimed_bu       = data['qualimedBu'],
            department        = data['department'],
            u_bb_code         = data['bizboxCode'],
            generic_name      = generic_name,
            measurement       = measurement,
            uom_code          = uom_code,
            uom_name          = uom_name,
            brand_name        = data['brandName'],
            medecine_type     = data['medicineType'],
            mfg               = data['mfg'],
            other_descriptors = data['otherDescriptors'],
            purchaseable      = data['purchaseable'],
            sellable          = data['sellable'],
            inventory_item    = data['inventoryItem'],
            item_name         = f"{generic_name} [{data['brandName']}] {uom} {data['medicineType']} {data['otherDescriptors']} {data['mfg']}",
            # status            = data['status']
        )

        db.session.add(new_item)
        db.session.commit()
        # region - bulk registration
        # request_items = dict(request.get_json())
        # # data = request_items['data']
        # for data in request_items['data']:
        #     trans_generic_name = {}
        #     trans_measurement = {}
        #     trans_uom_code = {}
        #     new_item = Item (
        #         # item_code         = data['itemCode'],
        #         # date_requested    = data['dateRequested'],
        #         # requested_by_id   = data['requestedById'],
        #         requested_by      = data['requestedBy'],
        #         # item_group_code   = data['itemGroupCode'],
        #         qualimed_bu       = data['qualimedBu'],
        #         # u_bb_code         = data['bizboxCode'],
        #         item_name         = data['itemName'],
        #         generic_name      = trans_generic_name,
        #         measurement       = trans_measurement,
        #         uom_code          = trans_uom_code,
        #         # brand_name        = data['brandName'],
        #         # mfg               = data['mfg'],
        #         # other_descriptors = data['otherDescriptors'],
        #         # purchaseable      = data['purchaseable'],
        #         # sellable          = data['sellable'],
        #         # inventory_item    = data['inventoryItem'],
        #         # status            = data['status']
                
        #     )

        #     db.session.add(new_item)
        #end region

        return jsonify({"code": 200, "message": "Item created successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})

def search_item():

    try:
        search_term = request.get_json()['searchItem'].lower()
        print(f"Search Item = {search_term}")
        items = Item.query

        search_items = items.filter(func.lower(Item.item_name).like(f"%{search_term}%"))
        if search_items:
            json_data = [u.toDict() for u in search_items]
        else:
            json_data = []

        print(f'Data: {json_data}')
            
        return jsonify({"code": 200, "data": json_data})

    except Exception as e:
        return jsonify({"code": 401, "message": f"Unexpected Error: {e}"})



def retrieve_item_controller(item_id):
    response = Item.query.get(item_id).toDict()
    return jsonify(response)

def update_item_controller(item_id):
    request_form = request.form.to_dict()
    item = Item.query.get(item_id)

    item.email        = request_form['email']
    item.username     = request_form['username']
    item.dob          = request_form['dob']
    item.country      = request_form['country']
    item.phone_number = request_form['phone_number']
    db.session.commit()

    response = Item.query.get(item_id).toDict()
    return jsonify(response)

def delete_item_controller(item_id):
    Item.query.filter_by(id=item_id).delete()
    db.session.commit()

    return ('Item with Id {} deleted successfully!').format(item_id)

def create_item_group_controller():
    
    try:
        request_items = dict(request.get_json())
        for request_item in request_items['item_group_data']:
            new_item = Item (
                item_group_code =   request_item['item_group_code'],
                item_group_desc =  request_item['item_group_desc'],
            )

            db.session.add(new_item)
        db.session.commit()

        return jsonify({"code": 200, "message": "Item group data successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})
    

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