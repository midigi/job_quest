from .db import db
from .characterItems import characteritems


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))
    cost = db.Column(db.Integer)

    required_opt = db.relationship("Option", back_populates="required_item", foreign_keys="Option.item_id")
    rewarded_opt = db.relationship("Option", back_populates="reward_item", foreign_keys="Option.reward_item_id")
    characters = db.relationship("Character", lazy="dynamic", secondary=characteritems,
                            back_populates="items")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "cost": self.cost,
        }
