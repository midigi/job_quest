from werkzeug.security import generate_password_hash
from app.models import db, Event

# Adds a demo user, you can add other users here if you want
def seed_events():

    getSched = Event(location_id=1, name='Get Class Schedule', description='Get class schedule so you know where to go.')
    goToClass = Event(location_id=2, name='Go to class', description='Going to class is important to passing!')
    study = Event(location_id=3, name='Study for test', description='Study for that big exam tomorrow.')
    sleep = Event(location_id=4, name='Sleep', description='Sleeping is important for keeping stamina up.')
    test = Event(location_id=2, name='Take the test', description='Time for a test! Very stressful.')
    sport = Event(location_id=5, name='Sign up for a sports team', description='Playing sports is good for mental and physical health.')
    graduate = Event(location_id=6, name='Graduate', description='Graduation deserves a big congratulations!')
    exploreDorm = Event(location_id=4, name='Explore the basement', description='It seems the janitor accidently left the basement door unlocked. I wonder what could be under the dorm rooms?')
    exploreStadium = Event(location_id=5, name='Walk around the stadium', description='It is game day! Might as well have some fun.')
    commonArea = Event(location_id=4, name='Check out the common area.', description='Play some video games, meet a friend, or read a good book in the presence of others.')

    db.session.add(getSched)
    db.session.add(goToClass)
    db.session.add(study)
    db.session.add(sleep)
    db.session.add(test)
    db.session.add(sport)
    db.session.add(graduate)
    db.session.add(exploreDorm)
    db.session.add(exploreStadium)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
