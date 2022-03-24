"""
This file is required by gunicorn in order to start the server.

Please don't modify it.
"""

from lymmers.main import app

if __name__ == "__main__":
    app.run()
