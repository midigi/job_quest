from .db import db


class Option(db.Model):
    __tablename__ = 'options'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    reward_item_id = db.Column(db.Integer, db.ForeignKey("items.id"))
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"))
    name = db.Column(db.String(100), nullable=False)
    positive_contingency = db.Column(db.String(500))
    negative_contingency = db.Column(db.String(500))

    event = db.relationship("Event", back_populates="options")
    required_item = db.relationship("Item", back_populates="required_opt", foreign_keys="Option.item_id")
    reward_item = db.relationship("Item", back_populates="rewarded_opt", foreign_keys="Option.reward_item_id")

    def to_dict(self):
        return {
            "id": self.id,
            "item_id": self.item_id,
            "reward_item_id": self.reward_item_id,
            "event_id":  self.event_id,
            "name": self.name,
            "positive_contingency": self.positive_contingency,
            "negative_contingency": self.negative_contingency,
        }
