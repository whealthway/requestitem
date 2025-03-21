from flask import jsonify
from ..models import SAPUOM

def GetAllUOMSController():
    try:
        uoms = SAPUOM.query.all()
        data = []
        for uom in uoms: 
            uom_dict = uom.toDict()
            data.append({
                'uom_code': uom_dict['UOMCdoe'],
                'uom_name': uom_dict['UOMName'],
                'uom_abs': uom_dict['UOMAbs']
            })

        return jsonify({"code": 200, "data":data})
    
    except Exception as e:
        return jsonify({"code":400, "message": f"Unexpected error occur: {e}"})

    