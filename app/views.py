from app import app
from flask import render_template, request
from config import BASE_URL
import csv


# Not being used anywhere
@app.route('/connect-choropleth')
def connect():
    page_url = BASE_URL + request.path
    return render_template('health-connect-choropleth.html', page_url=page_url)


@app.route('/sewage')
def sewage():
    page_url = BASE_URL + request.path
    return render_template('sewage.html', page_url=page_url)


@app.route('/doc-cloud')
def cloud():
    return render_template('doc-cloud.html')


@app.route('/license-plates')
def license():
    return render_template('license-plates.html')


@app.route('/broadband')
def broadband():
    return render_template('broadband.html')


@app.route('/town-meeting/school-budget')
def school_budget():
    return render_template('school-budget.html')


@app.route('/town-meeting/town-budget')
def town_budget():
    return render_template('town-budget.html')


@app.route('/town-meeting/public-bank')
def public_bank():
    return render_template('public-bank.html')


@app.route('/town-meeting/results')
def results():
    return render_template('results.html')


@app.route('/town-meeting/tar-sands')
def tar_sands():
    return render_template('tar-sands.html')


@app.route('/code/tmd-index')
def tmd_index():
    return render_template('tmdindex.html')


@app.route('/code/tmd-script')
def tmd_script():
    return render_template('tmdscript.html')


@app.route('/code/tmd-structure')
def tmd_structure():
    return render_template('tmdstructure.html')


@app.route('/winter-lengths')
def winter_length():
    f = csv.reader(open('data/winters.csv', 'rU'))
    winters = [l for l in f]
    del winters[0]

    return render_template('winter.html', winters=winters)
