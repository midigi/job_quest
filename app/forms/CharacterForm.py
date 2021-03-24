from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SelectField, TextAreaField, SubmitField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired


class CharacterForm(FlaskForm):
    user_id = IntegerField(validators=[DataRequired()])
    pic_url = StringField("pic_url", validators=[DataRequired()])
    location_id = IntegerField(validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    stamina= IntegerField(validators=[DataRequired()])
    mental_health= IntegerField(validators=[DataRequired()])
    wisdom= IntegerField(validators=[DataRequired()])
    intelligence= IntegerField(validators=[DataRequired()])
    submit = SubmitField("submit")
