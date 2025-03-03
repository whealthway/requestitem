from flask import request, jsonify
from sqlalchemy import or_, func
import json

import uuid

from .. import db
from .models import Item

# ----------------------------------------------- #

# Query Object Methods => https://docs.sqlalchemy.org/en/14/orm/query.html#sqlalchemy.orm.Query
# Session Object Methods => https://docs.sqlalchemy.org/en/14/orm/session_api.html#sqlalchemy.orm.Session
# How to serialize SqlAlchemy PostgreSQL Query to JSON => https://stackoverflow.com/a/46180522

def list_all_items_controller():
    items = Item.query.all()
    response = []
    for item in items: response.append(item.toDict())

    return jsonify(response)

def create_item_controller():
    
    try:
        request_item = dict(request.get_json())
        data = request_item['data']
        trans_generic_name = {}
        trans_measurement = {}
        trans_uom_code = {}
        new_item = Item (
            item_code         = data['itemCode'],
            date_requested    = data['dateRequested'],
            requested_by_id   = data['requestedById'],
            requested_by      = data['requestedBy'],
            item_group_code   = data['itemGroupCode'],
            qualimed_bu       = data['qualimedBu'],
            u_bb_code         = data['bizboxCode'],
            item_name         = data['itemName'],
            generic_name      = trans_generic_name,
            measurement       = trans_measurement,
            uom_code          = trans_uom_code,
            brand_name        = data['brandName'],
            mfg               = data['mfg'],
            other_descriptors = data['otherDescriptors'],
            purchaseable      = data['purchaseable'],
            sellable          = data['sellable'],
            inventory_item    = data['inventoryItem'],
            status            = data['status']
            
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
        search_term = request.get_json()['searchItem']
        items = Item.query

        search_items = items.filter(Item.item_name.like('%' + search_term + '%'))
        
        # courses = courses.order_by(models.Course.name).all()
        
        # result = session.query(Item).filter(func.lower(Item.item_name).like(f"%{search_term.lower()}%")).all()
        json_data = [u.toDict() for u in search_items]
        print(f"Search value: {json_data}")
        # print(f"Result: {result}")
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