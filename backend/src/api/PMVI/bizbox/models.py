from sqlalchemy import inspect, create_engine, text
from .... import db # from __init__.py

# ----------------------------------------------- #

# SQL Datatype Objects => https://docs.sqlalchemy.org/en/14/core/types.html
class iwItems(db.Model):
    
    __bind_key__ = "bizbox_pmvi"
    __tablename__ = 'iwItems'

    PK_iwItems  = db.Column(db.NVARCHAR(20), primary_key = True)
    itemdesc = db.Column(db.NVARCHAR(500))
    FK_mscPrintCategory = db.Column(db.NVARCHAR(500))
    # bigunit = ''
    # conversion = '' #qty

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }
    
    def __repr__(self):
        return "<%r>" % self.PK_iwItems