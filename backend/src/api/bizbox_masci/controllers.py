from flask import request, jsonify
from .models import iwItems
from sqlalchemy import func, text, create_engine
from ... import db

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


def call_stored_procedure():
    searchItem = request.get_json()['searchItem'].lower()
    print(searchItem)
    try:
        with db.get_engine(bind='bizbox_masci').connect() as connection:
            sql_command = text("EXEC dbo.QMED_AA_ItemSearch @itm=:item")
            result = connection.execute(sql_command, {'item': searchItem})
            data = result.fetchall()
            
            print(data)
            item_result = []
            for item in data:
                item_result.append(
                    {
                        'order_no':       item[0], #use only for sorting only
                        'data_source':    item[1],
                        'bb_code':        item[2],
                        'sap_code':       item[3],
                        'aa_order_item':  item[4],
                        'aa_item_master': item[5],
                        'description':    item[6]               
                    }
                )

            return jsonify({"code": 200, "data":item_result})
        
    except Exception as e:
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})
