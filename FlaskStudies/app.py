from flask import Flask, render_template, request

app = Flask(__name__) #refers to name of current file 'says hey flask turn this file into a flask app'

@app.route("/")
def index():
	return render_template("index.html")
