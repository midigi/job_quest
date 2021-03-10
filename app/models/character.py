from .db import db
from .characterItems import characteritems


class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    pic_url = db.Column(db.String(200), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    stamina = db.Column(db.Integer, nullable=False)
    mental_health = db.Column(db.Integer, nullable=False)
    wisdom = db.Column(db.Integer, nullable=False)
    intelligence = db.Column(db.Integer, nullable=False)

    location = db.relationship("Location", back_populates="characters")
    user = db.relationship("User", back_populates="characters")
    items = db.relationship("Item", lazy="dynamic", secondary=characteritems,
                            back_populates="characters")

    def to_dict(self):
        return {
            "id": self.id,
            "pic_url": self.pic_url,
            "name": self.name,
            "stamina": self.stamina,
            "mental_health": self.mental_health,
            "wisdom": self.wisdom,
            "intelligence": self.intelligence,
        }
