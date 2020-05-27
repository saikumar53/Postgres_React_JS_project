import names

import random

import datetime

from faker import Faker

fake = Faker()

from random import randint

def cal_cid():

    return random.randint(100000, 1000000)


def cal_accno():

    return random.randint(1000000, 10000000)


import pandas as pd

#Generate Customer Data

column_name = ["Customer_ID", "Name", "Age", "Address"]

data = pd.DataFrame(columns = column_name)

for i in range(500):

	temp = pd.DataFrame([[cal_cid(), fake.name(), random.randint(20,59), fake.address()], [cal_cid(), fake.name(), random.randint(20,59), fake.address()]], columns = column_name)

	data = data.append(temp)


#print(data)

data.to_csv('customer2.csv')


#Generate Account Data

column_name_2 = ["Customer_ID", "Account_No"]

data2 = pd.DataFrame(columns = column_name_2)

customer = pd.read_csv('customer2.csv')

cid = customer['Customer_ID'].values.tolist()

for i in range(0, 1000 ,2):

	temp = pd.DataFrame([[cid[i], cal_accno()], [cid[i + 1], cal_accno()]], columns = column_name_2)

	data2 = data2.append(temp)

data2.to_csv('Account.csv')


#Generate Credit Card Data

def date_generate():

	start_date = datetime.date(2019, 1, 1)
	end_date = datetime.date(2020, 4, 1)

	time_between_dates = end_date - start_date
	days_between_dates = time_between_dates.days
	random_number_of_days = random.randrange(days_between_dates)
	date = start_date + datetime.timedelta(days=random_number_of_days)

	return date



cc_limit = [500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000]

other_card = [0,2]


colums2 = ["Customer_ID","CC_Limit", "Other_cards", "Last_Ann_Paid", "Last_Credit_Upgrade", "Card_type", "Balance_change"]

data2 = pd.DataFrame(columns = colums2)

customer = pd.read_csv('customer2.csv')

cid = customer['Customer_ID'].values.tolist()

def get_balance():
    if random.random() <= 0.5:
        return random.randint(-10000, 0)
    else:
        return random.randint(0, 10000)


def card_number():

	return random.randint(10000000000, 100000000000)


def card_type():
    if random.random() <= 0.8:
        return "C"
    else:
        return "D"


def get_number():
    if random.random() <= 0.7:
        return 1
    else:
        return random.choice(other_card)


def credit_score():

	return random.randint(300, 850)

#print(len(cid))
#print("Hello")

for i in range(0, 1000 ,2):

	c1 = random.choice(cc_limit)
	c2 = random.choice(cc_limit)

	cc1 = card_number()
	cc2 = card_number()

	oc1 = get_number()
	oc2 = get_number()

	last_ann1 = date_generate()
	last_ann2 = date_generate()

	last_credit_upgrade1 = date_generate()
	last_credit_upgrade2 = date_generate()

	card1 = card_type()
	card2 = card_type()

	balance1 = get_balance()
	balance2 = get_balance()

	#c_score = credit_score(c1, oc1, last_ann, last_credit_upgrade, card, balance)
	temp = pd.DataFrame([[cid[i], c1, oc1, last_ann1, last_credit_upgrade1, card1, balance1], [cid[i + 1],c2, oc2, last_ann2, last_credit_upgrade2, card2, balance2]], columns = colums2)

	data2 = data2.append(temp)

	#print(temp)

data2.to_csv('Credit_new.csv')


	



