from werkzeug.security import generate_password_hash
from app.models import db, Option

def seed_options():

    getSched = Option(reward_item_id=2, event_id=1, name='Ask for class schedule.', positive_contingency='Your advisor gives you your class schedule.')
    dropOut = Option(name='Drop out of class.', event_id=1, positive_contingency='College is not for everyone. There are a lot of jobs you can get without a degree!')
    goToClass = Option(item_id=2, reward_item_id=1, event_id=2, name='Ask for class schedule.', positive_contingency='You learn a lot of great material. Here is some homework to really drive home the lesson. Study the homework before the test tomorrow!', negative_contingency='Are you sure you are in the right class? I recommend getting a class schedule to be sure!')

    db.session.add(getSched)
    db.session.add(dropOut)
    db.session.add(goToClass)

    db.session.commit()

def undo_options():
    db.session.execute('TRUNCATE options RESTART IDENTITY CASCADE;')
    db.session.commit()
