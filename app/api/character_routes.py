from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Character, Item, characterItems, Option, db

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


@character_routes.route('/<int:charId>/<int:optionId>')
@login_required
def getCharItem(charId, optionId):
    character = Character.query.get(charId)
    charItem = {"items": [item.to_dict() for item in character.items.all()]}
    option = Option.query.get(optionId)
    # print("option POSITIVE in char routes", option.positive_contingency)
    # print("option ITEM in char routes", option.item_id)

    char_reward = option.reward_item_id

    a = Character()
    a = character
    b = Item()
    if(char_reward is not None):
        b = Item.query.get(option.reward_item_id)
        b.characters.append(a)
    else:
        return option.positive_contingency
    # print("-----current_user -----", character.items)
    # print("======char items=====", charItem)
    # print("======Reward Item=====", Item.query.get(option.reward_item_id))

    # Make sure reward item hasn't already been collected
    for item in charItem["items"]:
        if (item['id'] == char_reward):
            return "You already have this item!"

    # Starting point and red-herrings don't need items to have positive contingency
    if (option.item_id is None):
        if (char_reward is not None):
            db.session.add(b)
            db.session.commit()
            return option.positive_contingency

    for itemId in charItem['items']:
        # print("======char items.items=====", itemId['id'])
        if (itemId['id'] == option.item_id):
            db.session.add(b)
            db.session.commit()
            return option.positive_contingency
    return option.negative_contingency

@character_routes.route('/<int:id>/items')
@login_required
def characterItems(id):
    character = Character.query.get(id)
    return {"items": [item.to_dict() for item in character.items]}
