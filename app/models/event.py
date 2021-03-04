from .db import db


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    location_id = db.Column(db.Integer, db.ForeignKey("locations.id"), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))

    location = db.relationship("Location", back_populates="events")
    options = db.relationship("Option", back_populates="event")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
        }
