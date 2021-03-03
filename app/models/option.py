from .db import db


class Option(db.Model):
    __tablename__ = 'options'

    id = db.Column(db.Integer, primary_key=True)
    item_id = db.Column(db.Integer, db.ForeignKey("items.id")
    reward_item = db.Column(db.Integer, db.ForeignKey("items.id"))
    event_id = db.Column(db.Integer, db.ForeignKey("events.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    positive_contingency = db.Column(db.String(50))
    negative_contingency = db.Column(db.String(50))

    event = db.relationship("Event", back_populates="option")
    item = db.relationship("Item", back_populates="option")

    def to_dict(self):
        return {
            "id": self.id,
            "item_id": self.item_id,
            "reward_item": self.reward_item,
            "event_id":  self.event_id,
            "name": self.name,
            "positive_contingency": self.positive_contingency,
            "negative_contingency": self.negative_contingency,
        }
