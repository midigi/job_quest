from werkzeug.security import generate_password_hash
from app.models import db, Character, User

# Adds a demo user, you can add other users here if you want
def seed_characters():
    demo = User.query.filter_by(username = 'Demo').first()
    demoChar = Character(user=demo, pic_url='https://webstockreview.net/images/student-clipart-college-student-2.png', location_id=1, stamina=1, mental_health=1, wisdom=1, intelligence=1)

    db.session.add(demoChar)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_characters():
    db.session.execute('TRUNCATE characters RESTART IDENTITY CASCADE;')
    db.session.commit()
