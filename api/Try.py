#!/usr/bin/env python
# coding: utf-8

import pandas as pd 
import numpy as np
import csv

def checkAnswer(x):
    
    if ((x['bodyaches'] == "No")& (x['cough'] == "Yes") & (x['diarrhea'] == "No") & (x['fatigue'] == "Yes") & (x['fever'] == "No") & (x['headache'] == "NO") &  (x['lostoftaste'] == "No") & (x['shortness of breath'] == "No") & (x['sneezing'] == "Yes") & (x['sore throat'] == "No") & (x['stuffy nose'] == "Yes")):
        Result = "Allergies"
    elif ((x['bodyaches'] == "Yes")& (x['cough'] == "Yes") & (x['diarrhea'] == "No") & (x['fatigue'] == "Yes") & (x['fever'] == "No") & (x['headache'] == "NO") &  (x['lostoftaste'] == "No") & (x['shortness of breath'] == "No") & (x['sneezing'] == "Yes") & (x['sore throat'] == "Yes") & (x['stuffy nose'] == "Yes")): 
        Result = "Cold"
    elif ((x['bodyaches'] == "Yes")& (x['cough'] == "Yes") & (x['diarrhea'] == "Yes") & (x['fatigue'] == "Yes") & (x['fever'] == "Yes") & (x['headache'] == "Yes") &  (x['lostoftaste'] == "No") & (x['shortness of breath'] == "No") & (x['sneezing'] == "No") & (x['sore throat'] == "Yes") & (x['stuffy nose'] == "Yes")): 
        Result = "Influenza"
    else:
        Result = "Coronavirus"
    return Result
	
#Reading the csv 
data = pd.read_csv('C:\\Users\\Prekshya\\Desktop\\SASEHack\\Try.csv') 

data['answered'] = data.apply(checkAnswer, axis=1)
data.head()