from flask import request, jsonify
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
        request_items = dict(request.get_json())
        for request_item in request_items['data']:
            new_item = Item (
                date_requested =   request_item['date_requested'],
                requested_by_id =  request_item['requested_by_id'],
                requested_by =     request_item['requested_by'],
                qualimed_bu =      request_item['qualimed_bu'],
                item_name =        request_item['item_name'],
                item_group_code =  request_item['item_group_code'],
                purc_sell_item =   request_item['purc_sell_item'],
                sell_item =        request_item['sell_item'],
                inventory_item =   request_item['inventory_item'],
                u_bb_code =        request_item['u_bb_code'],
            )

            db.session.add(new_item)
        db.session.commit()

        return jsonify({"code": 200, "message": "Item created successfully"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})

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