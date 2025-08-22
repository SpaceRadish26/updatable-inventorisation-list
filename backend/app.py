from flask import Flask
from flask_cors import CORS

from util.json_reader import read_inventory_json

app = Flask(__name__)
CORS(app)

@app.route('/inventory')
def get_json():
    return read_inventory_json('data/json_formatted.txt')