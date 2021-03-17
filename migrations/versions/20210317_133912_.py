"""empty message

Revision ID: dde61fddbcc1
Revises: b26f5e4aa513
Create Date: 2021-03-17 13:39:12.292509

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dde61fddbcc1'
down_revision = 'b26f5e4aa513'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('items', sa.Column('pic_url', sa.String(length=200), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('items', 'pic_url')
    # ### end Alembic commands ###
