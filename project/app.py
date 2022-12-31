import sqlite3
from flask import Flask, redirect, render_template, request

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

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

SQL = [
{"command": "SELECT", "description": "Retrieves data from a database table."},
{"command": "INSERT INTO", "description": "Inserts new data into a database table."},
{"command": "UPDATE", "description": "Modifies existing data in a database table."},
{"command": "DELETE FROM", "description": "Deletes data from a database table."},
{"command": "CREATE TABLE", "description": "Creates a new database table."},
{"command": "DROP TABLE", "description": "Deletes a database table."},
{"command": "ALTER TABLE", "description": "Modifies the structure of a database table."},
{"command": "SELECT DISTINCT", "description": "Retrieves unique data from a database table."},
{"command": "WHERE", "description": "Filters results based on specified conditions."},
{"command": "AND/OR", "description": "Combines multiple conditions in a WHERE clause."},
{"command": "ORDER BY", "description": "Sorts results in ascending or descending order."},
{"command": "GROUP BY", "description": "Groups results by a specified column or columns."},
{"command": "HAVING", "description": "Filters grouped results based on specified conditions."},
{"command": "JOIN", "description": "Retrieves data from multiple tables based on a common column."},
{"command": "INNER JOIN", "description": "Retrieves data from two tables where there is a match in both tables."},
{"command": "LEFT JOIN", "description": "Retrieves all data from the left table and matching data from the right table."},
{"command": "RIGHT JOIN", "description": "Retrieves all data from the right table and matching data from the left table."},
{"command": "FULL OUTER JOIN", "description": "Retrieves all data from both tables, regardless of whether there is a match in both."},
{"command": "UNION", "description": "Combines the results of two SELECT statements."},
{"command": "UNION ALL", "description": "Combines the results of two SELECT statements, including duplicate rows."},
{"command": "MIN/MAX", "description": "Returns the minimum or maximum value in a column."},
{"command": "COUNT", "description": "Counts the number of rows in a table."},
{"command": "AVG", "description": "Calculates the average value in a column."},
{"command": "SUM", "description": "Calculates the sum of values in a column."},
{"command": "TRUNCATE TABLE", "description": "Deletes all data from a table, but does not delete the table structure."},
{"command": "TRANSACTION", "description": "Controls the commit or rollback of a series of database queries."}
]

# index route
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html", sheets=SHEETS)
    else:
        sheet = request.form.get("sheet")
        if sheet == "SQL":
            table = SQL
        # sheet variable is sending selected button to new template
        return render_template("sheet.html", sheets=SHEETS, sheet=sheet, table=table)
    
    
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
