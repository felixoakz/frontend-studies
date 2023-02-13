# Searches for shows
import sqlite3
from flask import Flask, render_template, request

app = Flask(__name__)


def execute_query(query, params=None, fetch=True):
    """
    -> a function to execute sqlite3 queries
    :param query: sql querie with unnamed parameters (?) in place of variables
    :param params: parameters in order and inside a TUPLE
    :param fetch: set to True if querie awaits some return value. False otherwise.
    :return: list of dictionary with items.
    """
    with sqlite3.connect("shows.db") as conn:
        cursor = conn.cursor()

        if params is None:
            cursor.execute(query)

        else:
            cursor.execute(query, params)

        if fetch:
            columns = [col[0] for col in cursor.description]
            result = [dict(zip(columns, row)) for row in cursor.fetchall()]
            return result

        else:
            conn.commit()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/search")
def search():
    q = "%" + request.args.get("q") + "%"
    shows = execute_query(
        "SELECT * FROM shows WHERE title LIKE ?", (q,), fetch=True)
    return render_template("search.html", shows=shows)
