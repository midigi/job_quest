from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Character, Item, db

character_routes = Blueprint('character', __name__)

@character_routes.route('/')
@login_required
def characters():
    characters = Character.query.all()
    return {"characters": {character.id: character.to_dict() for character in characters}}

@character_routes.route('/<int:id>')
@login_required
def getCharacter(id):
    character = Character.query.get(id)
    return {"character": character.to_dict()}

@character_routes.route('/', methods=["POST"])
@login_required
def postCharacter():
    # TO DO
    # create form first
    return {"key": "error"}



@character_routes.route('/<int:id>/items')
@login_required
def characterItems(id):
    character = Character.query.get(id)
    return {"items": [item.to_dict() for item in character.items]}
