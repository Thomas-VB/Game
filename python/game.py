from flask import flask
import requests 
from sense_hat import SenseHat
from time import sleep
from random import randint

app = Flask(__name__)
@app.route("/")
def home():
    return "hello, flask"

def move(direction):
    if direction == 'left':
        then; 
