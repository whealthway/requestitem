from sqlalchemy import inspect
from .... import db
from datetime import datetime

# ----------------------------------------------- #
class SAP_ITEM_REQUESTS(db.Model):

    __bind_key__ = "bbtemp_sjdm"
    __tablename__ = 'SAP_ITEM_REQUESTS'
# Auto Generated Fields:
    item_id           = db.Column(db.Integer, autoincrement=True,primary_key=True)
# Input by User Fields:
    item_code           = db.Column(db.NVARCHAR(100))
    data_source         = db.Column(db.NVARCHAR(100))
    bb_code             = db.Column(db.NVARCHAR(100))
    sap_code            = db.Column(db.NVARCHAR(100))
    aa_order_item       = db.Column(db.NVARCHAR(100))
    aa_item_master      = db.Column(db.NVARCHAR(100))
    sap_item_group_code = db.Column(db.NVARCHAR(50), nullable=False)
    sap_item_group_name = db.Column(db.NVARCHAR(50), nullable=False)
    item_description    = db.Column(db.NVARCHAR(500), nullable=False)
    inventory_uom_code  = db.Column(db.NVARCHAR(100), nullable=False)
    inventory_uom_name  = db.Column(db.NVARCHAR(100), nullable=False)
    brand               = db.Column(db.NVARCHAR(100))
    product_code        = db.Column(db.NVARCHAR(250))
    purchaseable        = db.Column(db.BOOLEAN, nullable=False)
    sellable            = db.Column(db.BOOLEAN, nullable=False)
    inventorable        = db.Column(db.BOOLEAN, nullable=False)
    detailed_item       = db.Column(db.NVARCHAR(500), nullable=True)
    qualimed_bu         = db.Column(db.NVARCHAR(100), nullable=True)
    department          = db.Column(db.NVARCHAR(100), nullable=True)
    status              = db.Column(db.NVARCHAR(100), nullable=True)
#Auto Generated Fields
    created_by   = db.Column(db.NVARCHAR(100))
    created_at   = db.Column(db.DateTime(timezone=True), default=datetime.now)  
    updated_by   = db.Column(db.NVARCHAR(100))                         # The Date of the Instance Creation => Created one Time when Instantiation
    updated_at   = db.Column(db.DateTime(timezone=True), default=datetime.now, onupdate=datetime.now)    # The Date of the Instance Update => Changed with Every Update

# How to serialize SqlAlchemy PostgreSQL Query to JSON => https://stackoverflow.com/a/46180522
    def toDict(self):
        return { c.key: getattr(self, c.key) for c in inspect(self).mapper.column_attrs }

    def __repr__(self):
        return "<%r>" % self.item_id
