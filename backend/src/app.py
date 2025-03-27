import os

# App Initialization
from . import create_app # from __init__ file
app = create_app(os.getenv("CONFIG_MODE"))

# Hello World!
@app.route('/')
def hello():
    return "Hello World!"

# Applications Routes
from .api.MASCI.bbtemp import urls
from .api.MASCI.bizbox import urls
from .api.STR.bbtemp  import urls
from .api.STR.bizbox import urls
from .api.SJDM.bbtemp  import urls
from .api.SJDM.bizbox import urls
from .api.PMVI.bbtemp  import urls
from .api.PMVI.bizbox import urls
from .api.DMMC.bbtemp  import urls
from .api.DMMC.bizbox import urls
# from .items import urls

if __name__ == "__main__":
    # To Run the Server in Terminal => flask run -h localhost -p 5000
    # To Run the Server with Automatic Restart When Changes Occurred => FLASK_DEBUG=1 flask run -h localhost -p 5000

    app.run()


# Migrate command 
# flask db init
# flask db migrate
# flask db upgrade