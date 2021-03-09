from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Option, db

option_routes = Blueprint('option', __name__)

@option_routes.route('/')
@login_required
def options():
    options = Option.query.all()
    return {"options": [option.to_dict() for option in options]}
