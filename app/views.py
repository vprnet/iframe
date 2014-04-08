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


@app.route('/winter')
def winter_length():
    f = csv.reader(open('app/data/winters.csv', 'rU'))
    winters = [l for l in f]
    temperatures = [[20, 30, 40, 50, 60, 70, 80, 90],
        [20, 22, 24, 26, 28, 30, 32, 34],
        [25, 26, 27, 28, 29, 30, 31, 32],
        [30, 32, 34, 36, 38, 40, 42, 44],
        [35, 36, 37, 38, 39, 40, 41, 42],
        [40, 42, 44, 46, 48, 50, 52, 54],
        [45, 46, 47, 48, 49, 50, 51, 52],
        [50, 52, 54, 56, 58, 60, 62, 64],
        [55, 56, 57, 58, 59, 60, 61, 62],
        [60, 62, 64, 66, 68, 70, 72, 74],
        [65, 66, 67, 68, 69, 70, 71, 72],
        [70, 72, 74, 76, 78, 80, 82, 84],
        [80, 82, 84, 86, 88, 90, 92, 94]]

    return render_template('winter.html',
        temperatures=temperatures,
        winters=winters)
