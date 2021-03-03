from .db import db
from .characterItems import characteritems


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(100))
    cost = db.Column(db.Integer)

    option = db.relationship("Option", back_populates="item")
    character = db.relationship("Character", lazy="dynamic", secondary=characteritems,
                            back_populates="item")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "cost": self.cost,
        }
