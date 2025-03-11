from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os
from .config import Config
# from db import db

db = SQLAlchemy()
migrate = Migrate()


def create_app(config_mode):
    
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object(Config)

    db.init_app(app)
    # migrate.init_app(app, db)

    return app