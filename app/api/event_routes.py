from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Event, db

event_routes = Blueprint('event', __name__)

@event_routes.route('/')
@login_required
def events():
    events = Event.query.all()
    return {"events": [event.to_dict() for event in events]}
