import pandas as pd

import random

from faker import Faker  

fake = Faker()  


colums2 = ["Customer_ID", "Device_ID", "Total_time", "Visits", "Total_Applications", "Products_seen", "Search_query"]

data2 = pd.DataFrame(columns = colums2)

customer = pd.read_csv('customer2.csv')

cid = customer['Customer_ID'].values.tolist()

def cal_time():

	return random.randint(5, 20)

def cal_visits():

	return random.randint(3,8)

def cal_applications():

	return random.randint(0,3)


def cal_products():

	return random.randint(2,7)


def cal_query():

	return random.randint(4,12)



for i in range(0, 1000 ,2):

	t1 = cal_time()
	t2 = cal_time()

	v1 = cal_visits()
	v2 = cal_visits()

	a1 = cal_applications()
	a2 = cal_applications()

	p1 = cal_products()
	p2 = cal_products()

	s1 = cal_query()
	s2 = cal_query()

	temp = pd.DataFrame([[cid[i], fake.ipv4() ,t1, v1, a1, p1, s1], [cid[i + 1], fake.ipv4(), t2, v2, a2, p2, s2]], columns = colums2)


	data2 = data2.append(temp)


data2.to_csv('Device2.csv')





