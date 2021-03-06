from werkzeug.security import generate_password_hash
from app.models import db, Option

def seed_options():

    getSched = Option(reward_item_id=2, event_id=1, name='Ask for class schedule.', positive_contingency='Your advisor gives you your class schedule.')
    dropOut = Option(name='Drop out of class.', event_id=1, positive_contingency='College is not for everyone. There are a lot of jobs you can get without a degree!')
    goToClass = Option(item_id=2, reward_item_id=1, event_id=2, name='Go to class.', positive_contingency='You learn a lot of great material. Here is some homework to really drive home the lesson. Study the homework before the test tomorrow!', negative_contingency='Are you sure you are in the right class? I recommend getting a class schedule to be sure!')
    study = Option(item_id=1, reward_item_id=3, event_id=3, name='Study homework.', positive_contingency='You reinforce your classroom learning and feel confident for the test tomorrow. You gain "knowledge"! However, you start feeling a bit sleepy. Perhaps get some rest!', negative_contingency='Do you have anything to study yet? Going to class first might help!')
    signUpSport = Option(item_id=8, reward_item_id=5, event_id=6, name='Sign up to play a sport.', positive_contingency='Playing a sport is great for you physical and mental health! You also get credit for participating in extra curricular activities.', negative_contingency='I recommend studying and getting good marks before you do anything extra.')
    takeTest = Option(item_id=3, reward_item_id=8, event_id=5, name='Take the test.', positive_contingency='Wow you aced that test! You get an A+ on the test! Might as well head on over to the career office to look for a job.', negative_contingency='You are probably going to fail this test. Perhaps study a bit first?')
    graduate = Option(item_id=5, reward_item_id=4, event_id=7, name='Try to graduate', positive_contingency='Congratulations! You are a hard working, dedicated, talented, and smart individual! You graduate and get an awesome job!', negative_contingency='It does not look like you have the proper requirements to graduate. Perhaps go to class or do some extra curricular activities.')
    exploreDorm = Option(reward_item_id=6, event_id=8, name='Explore Basement', positive_contingency='You found a pen! Exciting.')
    sleep = Option(event_id=4, name='Rest', positive_contingency='You feel well rested and ready to tackle the day!')
    exploreStadium = Option(reward_item_id=9, event_id=9, name='Watch game', positive_contingency='You cheer on the school team. You also get a beer to drink. Fun!')
    studyInDorm = Option(item_id=1, reward_item_id=3, event_id=10, name='Study homework.', positive_contingency='You reinforce your classroom learning and feel confident for the test tomorrow. You gain "knowledge"! However, you start feeling a bit sleepy. Perhaps get some rest!', negative_contingency='Do you have anything to study yet? Going to class first might help!')
    meetFriend = Option(reward_item_id=10, event_id=10, name='Talk to other students.', positive_contingency='You meet a new friend! What a joyous occurance. :)')
    easterEgg = Option(reward_item_id=7, name='Find Easter Egg', positive_contingency='You found the easter egg. Hire me please?')

    db.session.add(getSched)
    db.session.add(dropOut)
    db.session.add(goToClass)
    db.session.add(study)
    db.session.add(signUpSport)
    db.session.add(takeTest)
    db.session.add(graduate)
    db.session.add(exploreDorm)
    db.session.add(sleep)
    db.session.add(exploreStadium)
    db.session.add(studyInDorm)
    db.session.add(meetFriend)
    db.session.add(easterEgg)

    db.session.commit()

def undo_options():
    db.session.execute('TRUNCATE options RESTART IDENTITY CASCADE;')
    db.session.commit()
