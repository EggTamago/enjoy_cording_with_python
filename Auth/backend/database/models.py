#===================================================
# SQLAlchemy uses the term "model" to refer to these classes and 
# instances that interact with the database.
#===================================================

from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Integer, String

from .database import Base

class Users(Base):
    __tablename__="users"

    user_id = Column(Integer, primary_key=True)
    label = Column(String(250))
    actor_name = Column(String(250))