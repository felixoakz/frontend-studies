from flask import Flask, render_template, request

app = Flask(__name__) #refers to name of current file 'says hey flask turn this file into a flask app'

@app.route("/")
def index():
	return render_template("index.html", name='Felix')

@app.route("/greet", methods=["POST"])
def greet():
	name = request.args.get("name", "world")
	return render_template("greet.html", name=name)
