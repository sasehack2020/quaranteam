def checkAnswer(x):
    if (x.get('Cough') == 'on') & (x.get('Fatigue') == 'on') & (x.get('Sneezing') == 'on') & (x.get('Stuffy nose') == 'on'):
        Result = "Allergies"
    elif (x.get('Body aches') == 'on') & (x.get('Cough') == 'on') & (x.get('Fatigue') == 'on') & (x.get('Sneezing') == 'on') & (x.get('Sore throat') == 'on') & (x.get('Stuffy nose') == 'on'):
        Result = "Cold"
    elif (x.get('Body aches') == 'on') & (x.get('Cough') == 'on') & (x.get('Diarrhea') == 'on') & (x.get('Fatigue') == 'on') & (x.get('Fever/Chills/Shaking') == 'on') & (x.get('Headache') == 'on') & (x.get('Sore throat') == 'on') & (x.get('Stuffy nose') == 'on'):
        Result = "Influenza"
    else:
        Result = "Coronavirus"
    return Result

from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/quiz', methods=["POST"])
def show_results():
    x = request.form
    return checkAnswer(x)