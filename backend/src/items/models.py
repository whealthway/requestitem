from sqlalchemy import inspect, ARRAY, NVARCHAR, NVARCHAR
from datetime import datetime
import os
# from flask_validator import ValidateEmail, ValidateNVARCHAR, ValidateCountry
from sqlalchemy.orm import validates
from sqlalchemy.orm import sessionmaker


from .. import db # from __init__.py

# ----------------------------------------------- #

# SQL Datatype Objects => https://docs.sqlalchemy.org/en/14/core/types.html
class Item(db.Model):

    __tablename__ = 'ItemRequests'
# Auto Generated Fields:
    item_id           = db.Column(db.Integer, autoincrement=True,primary_key=True)
# Input by User Fields:
    item_code         = db.Column(db.NVARCHAR(20), nullable=True)
    requested_by_id   = db.Column(db.NVARCHAR(100), nullable=True)
    requested_by      = db.Column(db.NVARCHAR(100), nullable=True)
    item_group_code   = db.Column(db.NVARCHAR(100), nullable=True)
    qualimed_bu       = db.Column(db.NVARCHAR(100), nullable=True)
    u_bb_code         = db.Column(db.NVARCHAR(100), nullable=True)
    item_name         = db.Column(db.NVARCHAR(250), nullable=True)
    generic_name      = db.Column(db.NVARCHAR(250), nullable=True)
    measurement       = db.Column(db.NVARCHAR(250), nullable=True)
    uom_code          = db.Column(db.NVARCHAR(250), nullable=True)
    brand_name        = db.Column(db.NVARCHAR(100), nullable=True)
    mfg               = db.Column(db.NVARCHAR(100), nullable=True)
    other_descriptors = db.Column(db.NVARCHAR(100), nullable=True)
    purchaseable      = db.Column(db.Boolean, nullable=True)
    sellable          = db.Column(db.Boolean, nullable=True)
    inventory_item    = db.Column(db.Boolean, nullable=True)
    status            = db.Column(db.NVARCHAR(100), nullable=True)
#Auto Generated Fields
    created      = db.Column(db.DateTime(timezone=True), default=datetime.now)                           # The Date of the Instance Creation => Created one Time when Instantiation
    updated      = db.Column(db.DateTime(timezone=True), default=datetime.now, onupdate=datetime.now)    # The Date of the Instance Update => Changed with Every Update

# How to serialize SqlAlchemy PostgreSQL Query to JSON => https://stackoverflow.com/a/46180522
    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }

    def __repr__(self):
        return "<%r>" % self.item_id
    

class SAPOITBItemGrp(db.Model):

    __tablename__ = 'SAP_OITB_ItemGrp'

    RefNo       = db.Column(db.NVARCHAR(20), primary_key = True)
    ItemGrpCode = db.Column(db.NVARCHAR(20))
    ItemGrpName = db.Column(db.NVARCHAR(50))

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }
        
    def __repr__(self):
        return "<%r>" % self.RefNo


class SAPUOM(db.Model):

    __tablename__ = 'SAP_UOM'

    UOMAbs       = db.Column(db.NVARCHAR(20), primary_key = True)
    UOMCdoe = db.Column(db.NVARCHAR(20))
    UOMName = db.Column(db.NVARCHAR(50))

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }
    
    def __repr__(self):
        return "<%r>" % self.UOMAbs
