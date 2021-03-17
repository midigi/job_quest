from werkzeug.security import generate_password_hash
from app.models import db, Item

# Adds a demo user, you can add other users here if you want
def seed_items():

    homework = Item(name='Homework', description='Homework for your favorite class. Can be used to study to pass a test!', pic_url='https://www.clipartkey.com/mpngs/m/23-239486_free-transparent-images-pngio-homework-icon-png.png', cost=0)
    classSchedule = Item(name='Class Schedule', description='This will help you navigate the lecture hall so you can get to class.', pic_url='http://cdn.onlinewebfonts.com/svg/img_534422.png', cost=0)
    knowledge = Item(name='Knowledge of class material', description='This will help you pass the test! Plus you know stuff now, you are a smart cookie!', pic_url='https://img.freepik.com/free-vector/illustration-education-concept_53876-20611.jpg?size=626&ext=jpg&ga=GA1.2.1348306104.1615766400', cost=0)
    diploma = Item(name='Diploma', description='Congratulations on graduation! This will help with your job search.', pic_url='https://images.vexels.com/media/users/3/166351/isolated/preview/ca61915f2e4ce896431872205069c5c5-graduation-diploma-icon-by-vexels.png', cost=0)
    extracurr = Item(name='Extra curricular activity', description='Having a well rounded personality is just as important as being book smart.', pic_url='https://www.clipartkey.com/mpngs/m/52-527556_crafts-clipart-co-curricular-activity-extra-curricular-activities.png', cost=0)
    pen = Item(name='Pen', description='It is a pen. You can write on paper with it.', pic_url='https://i.pinimg.com/originals/6b/62/82/6b6282ab4a1eaa494591e2f6a0e5b892.png', cost=0)
    easterEgg = Item(name='Easter Egg', description='How did you get that? Hmmmm...', pic_url='https://icon-library.com/images/easter-egg-icon/easter-egg-icon-3.jpg', cost=0)
    highMarks = Item(name='A+ test score', description='You must have studied really hard! Great work!', pic_url='https://image.flaticon.com/icons/png/512/1009/1009238.png', cost=0)

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
