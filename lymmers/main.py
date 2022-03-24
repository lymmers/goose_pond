from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_james():
    return "<h1>Hello, James Jameson!</h1>"