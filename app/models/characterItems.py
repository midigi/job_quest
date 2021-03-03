from .db import db

characteritems = db.Table(
    "character_items",
    db.Model.metadata,
    db.Column("character_id", db.Integer, db.ForeignKey("characters.id"), primary_key = True
    ),
    db.Column("item_id", db.Integer, db.ForeignKey("items.id"), primary_key = True
    )
)
