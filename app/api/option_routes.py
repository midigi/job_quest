from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Option, Event, db

option_routes = Blueprint('option', __name__)

@option_routes.route('/')
@login_required
def options():
    options = Option.query.all()
    return {"options": [option.to_dict() for option in options]}

@option_routes.route('/<int:event_id>')
@login_required
def option_by_event(event_id):
    event = Event.query.get(event_id)
    return {"options": [option.to_dict() for option in event.options]}

# @option_routes.route('/<int:event_id>')
# @login_required
# def option_by_event(event_id):
#     event = Option.query.get(event_id)
#     return {"options": [option.to_dict() for option in event.options]}
