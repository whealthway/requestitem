from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ItemRequest(Base):
    """
    User model to store user information.
    """
    __tablename__ = 'item_request_table'
    id = Column(Integer, primary_key=True)
    request_by = Column(String(50), nullable=False)
    item_group = Column(Integer, nullable=False)
    qualimed_bu = Column(Integer, nullable=False)
    measurement = Column(String(25), nullable=False)
    unit_of_measure = Column(String(25), nullable=False)
    generic_name = Column(String(100), nullable=False)
    brand_name = Column(String(100), nullable=True)
    mfg = Column(Integer, nullable=False)
    other_descriptors = Column(String(250), nullable=False)
