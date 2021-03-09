from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Location, db

location_routes = Blueprint('location', __name__)

@location_routes.route('/')
@login_required
def locations():
    locations = Location.query.all()
    return {"locations": [location.to_dict() for location in locations]}

@location_routes.route('/<int:id>/events')
@login_required
def event_by_location(id):
    location = Location.query.get(id)
    return {"events": [event.to_dict() for event in location.events]}
