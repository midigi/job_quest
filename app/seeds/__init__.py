from flask.cli import AppGroup
from .users import seed_users, undo_users
from .characters import seed_characters, undo_characters
from .items import seed_items, undo_items
from .options import seed_options, undo_options
from .locations import seed_locations, undo_locations
from .events import seed_events, undo_events
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_locations()
    seed_characters()
    seed_items()
    seed_events()
    seed_options()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_characters()
    undo_locations()
    undo_items()
    undo_events()
    undo_options()
    # Add other undo functions here
