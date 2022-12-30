import sqlite3
from flask import Flask, redirect, render_template, request

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# create database cursor and connect database
conn = sqlite3.connect('cheatsheet.db', check_same_thread=False)
print('>>>> SERVER MESSAGE: DATABASE CONNECTED SUCCESSFULLY')
cursor = conn.cursor()

# Check if the table already exists
cursor.execute("SELECT * FROM sqlite_master WHERE type='table' AND name='cheatsheet'")
result = cursor.fetchone()
if result != None:
    print('>>>> SERVER MESSAGE: DATABASE EXISTS AND IS READY')
# If the table does not exist, create it
else:
    cursor.execute("CREATE TABLE cheatsheet (description TEXT, command TEXT)")
    print('>>> SERVER MESSAGE: NEW DATABASE TABLE CREATED')


# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


SHEETS = [
    "SQL",
    "VSCODE",
    "GIT",
    "HTML"
]


# index route
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html", sheets=SHEETS)
    else:
        sheet = request.form.get("sheet")
        # sheet variable is sending selected button to new template
        return render_template("sheet.html", sheets=SHEETS, sheet=sheet)
    
    
#     # assign respective html form variables to its variables
#     name = request.form.get("name")
#     day = request.form.get("day")
#     month = request.form.get("month")
#     # insert given variables into database
#     cursor.execute("INSERT INTO birthdays (name, day, month) VALUES (?, ?, ?)", (name, day, month))
#     conn.commit()
#     return redirect("/")

# else:
#     # show all database
#     cursor.execute("SELECT * FROM birthdays")
#     birthdays = cursor.fetchall()
#     return render_template("index.html", birthdays=birthdays)
