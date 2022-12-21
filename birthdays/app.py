import sqlite3
from flask import Flask, redirect, render_template, request

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True



# create database cursor and connect database
conn = sqlite3.connect('birthdays.db')
print('>>>> SERVER MESSAGE: DATABASE CONNECTED SUCCESSFULLY')
cursor = conn.cursor()

# Check if the table already exists
cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='birthdays'")
result = cursor.fetchone()
print('>>>> SERVER MESSAGE: DATABASE EXISTS AND IS READY')

# If the table does not exist, create it
if result is None:
    cursor.execute("CREATE TABLE birthdays (id INTEGER, name TEXT, day INTEGER, month INTEGER, PRIMARY KEY(id))")
    print('>>> SERVER MESSAGE: NEW DATABASE TABLE CREATED')
conn.close()



@app.after_request
def after_request(response):
    # Ensure responses aren't cached
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response



@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":

        name = request.form.get("name")
        day = request.form.get("day")
        month = request.form.get("month")
        

        conn.execute("INSERT INTO birthdays (name, day, month) VALUES (?, ?, ?)", name, day, month)

        return redirect("/")

    else:
        birthdays = conn.execute("SELECT * FROM birthdays")
        return render_template("index.html", birthdays=birthdays)

