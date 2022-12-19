from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

db = sqlite3("sqlite:///froshims.db")


SPORTS = [
    "Basketball",
    "Football",
    "Soccer",
    "Ultimate Frisbee"
]

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)


@app.route("/deregister", methods=["POST"])
def deregister():
    
    # forget registrant
    id = request.form.get("id")
    if id:
        db.execute("DELETE FROM registrants WHERE id = ?", id)
    return redirect("/registrants")


@app.route("/register", methods=["POST"])
def register():
    
    # validate user name
    name = request.form.get("name")
    sport = request.form.get("sport")
    if not name or sport not in SPORTS:
        return render_template("error.html", message="Missing name or sport not existent.")
    
    # remember registrant
    db.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)", name, sport)
    
        # confirm registration
    return redirect("/registrants")
    


@app.route("/registrants")
def registrants():
    return render_template("registrants.html", registrants=REGISTRANTS)
