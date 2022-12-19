from flask import Flask, render_template, request

app = Flask(__name__)

REGISTRANTS = {}

SPORTS = [
    "Basketball",
    "Football",
    "Soccer",
    "Ultimate Frisbee"
]

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)


@app.route("/register", methods=["POST"])
def register():
    
    # validate user name
    name = request.form.get("name")
    if not name:
        return render_template("error.html", message="Missing name")
    
    # validate sport
    sport = request.form.get("sport")
    if not sport:
        return render_template("error.html", message="Missing sport!")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid sport!")
    # confirm registration
    return render_template("success.html")

    # remember registrants
    REGISTRANTS[name] = sport
    
    # confirm registration
    return redirect("/registrants")

