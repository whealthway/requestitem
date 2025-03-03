from sqlalchemy import inspect
from datetime import datetime
import os
# from flask_validator import ValidateEmail, ValidateString, ValidateCountry
from sqlalchemy.orm import validates
from sqlalchemy.orm import sessionmaker


from .. import db # from __init__.py

# ----------------------------------------------- #

# SQL Datatype Objects => https://docs.sqlalchemy.org/en/14/core/types.html
class Item(db.Model):
# Auto Generated Fields:
    item_id           = db.Column(db.Integer, autoincrement=True,primary_key=True)
# Input by User Fields:
    item_code         = db.Column(db.String(100), unique=True, nullable=True)
    date_requested    = db.Column(db.DateTime(timezone=True), nullable=True)
    requested_by_id   = db.Column(db.String(100), nullable=True)
    requested_by      = db.Column(db.String(100), nullable=True)
    item_group_code   = db.Column(db.Integer, nullable=True)
    qualimed_bu       = db.Column(db.String(100), nullable=True)
    u_bb_code         = db.Column(db.Integer, nullable=True)
    item_name         = db.Column(db.String(250), nullable=True)
    generic_name      = db.Column(db.JSON, nullable=True)
    measurement       = db.Column(db.JSON, nullable=True)
    uom_code          = db.Column(db.JSON, nullable=True)
    brand_name        = db.Column(db.String(100), nullable=True)
    mfg               = db.Column(db.String(100), nullable=True)
    other_descriptors = db.Column(db.String(100), nullable=True)
    purchaseable      = db.Column(db.Boolean, nullable=True)
    sellable          = db.Column(db.Boolean, nullable=True)
    inventory_item    = db.Column(db.Boolean, nullable=True)
    status            = db.Column(db.String(100), nullable=True)
#Auto Generated Fields
    created      = db.Column(db.DateTime(timezone=True), default=datetime.now)                           # The Date of the Instance Creation => Created one Time when Instantiation
    updated      = db.Column(db.DateTime(timezone=True), default=datetime.now, onupdate=datetime.now)    # The Date of the Instance Update => Changed with Every Update

# How to serialize SqlAlchemy PostgreSQL Query to JSON => https://stackoverflow.com/a/46180522
    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }

    def __repr__(self):
        return "<%r>" % self.item_id


class ItemGroup(db.Model):
    item_group_id     = db.Column(db.Integer, autoincrement=True ,primary_key=True)
    item_group_code   = db.Column(db.String(100), nullable=True)
    item_group_desc   = db.Column(db.String(100), nullable=True)
    created      = db.Column(db.DateTime(timezone=True), default=datetime.now)                           # The Date of the Instance Creation => Created one Time when Instantiation
    updated      = db.Column(db.DateTime(timezone=True), default=datetime.now, onupdate=datetime.now)    # The Date of the Instance Update => Changed with Every Update

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }
        
    def __repr__(self):
        return "<%r>" % self.item_group_id

class UnitOfMeasure(db.Model):
    uom_id     = db.Column(db.Integer, autoincrement=True ,primary_key=True)
    uom_code   = db.Column(db.String(100), nullable=True)
    uom_desc   = db.Column(db.String(100), nullable=True)
    created     = db.Column(db.DateTime(timezone=True), default=datetime.now)                           # The Date of the Instance Creation => Created one Time when Instantiation
    updated     = db.Column(db.DateTime(timezone=True), default=datetime.now, onupdate=datetime.now)    # The Date of the Instance Update => Changed with Every Update

    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }
        
    def __repr__(self):
        return "<%r>" % self.uom_id

# Session = sessionmaker(bind=os.environ.get('get_engine'))
# session = Session()