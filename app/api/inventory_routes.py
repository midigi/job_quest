from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Item, db

inventory_routes = Blueprint('inventory', __name__)

@inventory_routes.route('/create', methods=["POST"])
@login_required
def inventory(charInfo):
    items = Item.query.get(charInfo.id)
    print("items in inventory route", items)
    return {"inventory": [item.to_dict() for item in items]}
