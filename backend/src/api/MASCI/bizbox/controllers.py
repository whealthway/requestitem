from flask import request, jsonify
from .models import iwItems, MSC_BRANCHES
from sqlalchemy import func, text
from .... import db

def find_bizbox_code_details_controller():
    bb_code = request.get_json()['bbCode'].lower()

    items = iwItems.query
    # item = iwItems.query.get({"PK_iwItems": bb_code})
    results = items.filter(func.lower(iwItems.PK_iwItems) == bb_code).first()
    if results:
        result_dict = results.toDict()
        json_data =[ {
            'bb_code': result_dict['PK_iwItems'],
            'item_group': result_dict['FK_mscPrintCategory'],
            'item_description': result_dict['itemdesc']
        }]
    else:
        json_data = []

    return jsonify({"code": 200, "data":json_data})
def get_msc_branches_controller():
    try: 
        item_groups = MSC_BRANCHES.query.all()
        data = []
        for item_group in item_groups: 
            item_group_dict = item_group.toDict()
            data.append(item_group_dict)

        return jsonify({"code": 200, "data": data})
    
    except Exception as e:
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})


def call_stored_procedure_controller():
    searchItem = request.get_json()['searchItem'].lower()
    print(searchItem)
    try:
        with db.get_engine(bind='bizbox_masci').connect() as connection:
            sql_command = text("EXEC dbo.QMED_AA_ItemSearch @itm=:item")
            result = connection.execute(sql_command, {'item': searchItem})
            data = result.fetchall()
            
            item_result = []
            for item in data:
                item_result.append(
                    {
                        'order_no':       item[0],
                        'data_source':    item[1],
                        'bb_code':        item[2],
                        'sap_code':       item[3],
                        'aa_order_item':  item[4],
                        'aa_item_master': item[5],
                        'item_description':    item[6]               
                    }
                )

            return jsonify({"code": 200, "data":item_result})
        
    except Exception as e:
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})
