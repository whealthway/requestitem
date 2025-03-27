from flask import jsonify
from ..models import SAPOITBItemGrp

def GetAllSAPItemGroupController():
    try: 
        item_groups = SAPOITBItemGrp.query.all()
        data = []
        for item_group in item_groups: 
            item_group_dict = item_group.toDict()
            data.append({
                'item_group_code': item_group_dict['ItemGrpCode'],
                'item_group_name': item_group_dict['ItemGrpName'],
                'ref_no': item_group_dict['RefNo']
            })

        return jsonify({"code": 200, "data": data})
    
    except Exception as e:
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})