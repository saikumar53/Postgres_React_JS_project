import pandas as pd

import random

column_name = ["Customer_ID", "CurrentLoans", "LoanAmount", "AmountPaid", "AmountRemain" ,"InterestRate", "LoanType", "LoanPeroid" ,"Mortgages", "Total_Balance"]

data2 = pd.DataFrame(columns = column_name)

customer = pd.read_csv('customer2.csv')

cid = customer['Customer_ID'].values.tolist()

def get_number():

    if random.random() <= 0.5:
        return 0
    else:
        return 1

def loan_amount():

	return random.randint(1000, 5000)


def loan_amount_paid(loan_amount):

	return random.randint(1000, loan_amount)


def interest_rate():

	return random.randint(3,6)

def type_loan():

    if random.random() <= 0.85:
        return "Secured"
    else:
        return "Unsecured"

def loan_period():

	return random.randint(1,5)


def get_balance():

	return random.randint(5000, 15000)

def get_mortage():

	if random.random() <= 0.5:
		return 1
	else:
		return 0



for i in range(0, 1000 ,2):

	nl1 = get_number()
	nl2 = get_number()

	
	if(nl1 == 1):

		la1 = loan_amount()
		ap1 = loan_amount_paid(la1)
		ar1 = la1 - ap1
		ir1 = interest_rate()
		lp1 = loan_period()
		lt1 = type_loan()

	else:

		la1 = 0
		ap1 = 0
		ar1 = 0
		ir1 = 0
		lp1 = 0
		lt1 = 0

	if(nl2 == 1):

		la2 = loan_amount()
		ap2 = loan_amount_paid(la2)
		ar2 = la2 - ap2
		ir2 = interest_rate()
		lp2 = loan_period()
		lt2 = type_loan()

	else:

		la2 = 0
		ap2 = 0
		ar2 = 0
		ir2 = 0
		lp2 = 0
		lt2 = 0


	mortgage1 = get_mortage()
	mortgage2 = get_mortage()

	total_balance1 = get_balance()
	total_balance2 = get_balance()

	temp = pd.DataFrame([[cid[i], nl1, la1, ap1, ar1, ir1, lt1, lp1, mortgage1, total_balance1], [cid[i + 1], nl2, la2, ap2, ar2, ir2, lt2, lp2, mortgage2, total_balance2]], columns = column_name)

	data2 = data2.append(temp)


data2.to_csv('Mortgage2.csv')


