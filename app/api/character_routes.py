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
    # print("###################################")
    character = Character.query.get(charId)
    # print("charitems", character.items)
    # allItems = character.items.all()
    # print("all items in char routes", allItems)
    charItem = {"items": [item.to_dict() for item in character.items.all()]}

    # print("======char items.items=====", charItem.items)
    option = Option.query.get(optionId)

    print("option POSITIVE in char routes", option.positive_contingency)
    print("option ITEM in char routes", option.item_id)
    if (option.item_id is None):
        return option.positive_contingency
        print("======char items=====", charItem)

    for itemId in charItem['items']:
        print("======char items.items=====", itemId['id'])
        if (itemId['id'] == option.item_id):
            return option.positive_contingency
    # elif (option.item_id is in charItem)
    # optItem = {"option": [item.to_dict() for item in option.required_item.all()]}
    # optItem might return nonetype which can be okay
    # print("option ITEM in char routes---", optItem)
    return option.negative_contingency

    # if(option.id in allItems):
    #     return(True)
    # else:
    #     return(False)





@character_routes.route('/<int:id>/items')
@login_required
def characterItems(id):
    character = Character.query.get(id)
    return {"items": [item.to_dict() for item in character.items]}
