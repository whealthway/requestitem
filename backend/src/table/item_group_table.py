from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ItemGroup(Base):
    """
    User model to store user information.
    """
    __tablename__ = 'item_group_table'
    id = Column(Integer, primary_key=True)
    code = Column(String(50), nullable=False)
    description = Column(Integer, nullable=False)
