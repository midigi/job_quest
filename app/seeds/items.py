from werkzeug.security import generate_password_hash
from app.models import db, Item

# Adds a demo user, you can add other users here if you want
def seed_items():

    homework = Item(name='Homework', description='Homework for your favorite class. Can be used to study to pass a test!', cost=0)
    classSchedule = Item(name='Class Schedule', description='This will help you navigate the lecture hall so you can get to class.', cost=0)
    knowledge = Item(name='Knowledge of class material', description='This will help you pass the test! Plus you know stuff now, you are a smart cookie!', cost=0)
    diploma = Item(name='Diploma', description='Congratulations on graduation! This will help with your job search.', cost=0)
    extracurr = Item(name='Extra curricular activity', description='Having a well rounded personality is just as important as being book smart.', cost=0)
    pen = Item(name='Pen', description='It is a pen. You can write on paper with it.', cost=0)
    easterEgg = Item(name='Easter Egg', description='How did you get that? Hmmmm...', cost=0)
    highMarks = Item(name='A+ test score', description='You must have studied really hard! Great work!', cost=0)

    db.session.add(homework)
    db.session.add(classSchedule)
    db.session.add(knowledge)
    db.session.add(diploma)
    db.session.add(extracurr)
    db.session.add(pen)
    db.session.add(easterEgg)
    db.session.add(highMarks)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
