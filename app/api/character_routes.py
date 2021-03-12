from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Character, Item, db

character_routes = Blueprint('character', __name__)

@character_routes.route('/')
@login_required
def characters():
    characters = Character.query.all()
    return {"characters": [character.to_dict() for character in characters]}


@character_routes.route('/<int:id>/items')
@login_required
def characterItems(id):
    character = Character.query.get(id)
    return {"items": [item.to_dict() for item in character.items]}
