from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/greet")
def greet():
    
    #validate submission
    if not request.form.get("name") or request.form.get("sports") not in ["Basketball", "Soccer", "Ultimate Frisbee"]:
        return render_template("failure.html")

    # confirm registration
    return render_template("success.html")
