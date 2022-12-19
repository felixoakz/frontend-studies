from flash import Flask, render_template, request

app = Flask(__Name__)


@app.route("/")
def index():
    return render_template("index.html")
