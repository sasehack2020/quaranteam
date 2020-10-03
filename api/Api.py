#!/usr/bin/env python
# coding: utf-8

import pandas as pd 
import numpy as np
import csv

# Definition to extract the zip codes from the testing_center
def extractZip(st):
    firstLine = st.strip().split('\n')[-1]
    words = firstLine.strip().split()
    lastWord = words[-1]
    return lastWord 

#Reading the csv 
data = pd.read_csv('C:\\Users\\Prekshya\\Desktop\\SASEHack\\simplemaps_uszips_basicv1.72\\uszips.csv')
data.head()

# path to URL from Chrome DevTools Console
url = "https://sheetlabs.com/NCOR/covidtestcentersinUS"

# read remote URL data to DataFrame
testing_center = pd.read_json(url)
testing_center.head()

#Creates a new columm for zipcode
testing_center['zipcode']=testing_center['address'].apply(lambda x: extractZip(str(x)))
testing_center.head()
 
#Concat the two databases
final_dataset = pd.concat([data, testing_center], axis=1, sort=False)

