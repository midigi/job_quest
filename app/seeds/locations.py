from werkzeug.security import generate_password_hash
from app.models import db, Location

def seed_locations():

    admnOff = Location(name="Admission\'s Office", description='This place helps you find out where you should go!')
    lecHall = Location(name="Lecture Hall", description='Where you can go to class.')
    library = Location(name="Library", description='A great place to study.')
    dorm = Location(name="Dorm", description='You have to go to sleep at some point.')
    sport = Location(name="Sport Stadium", description='SPORTS!!!! GO TEAM GO!')
    careerOff = Location(name="Career Office", description='Place to go when you are ready to graduate.')

    db.session.add(admnOff)
    db.session.add(lecHall)
    db.session.add(library)
    db.session.add(dorm)
    db.session.add(sport)
    db.session.add(careerOff)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()
