/*Run these commands from psql shell of
postgre from client side
by giving the appropriate credentials*/

/*Customer Load Query*/
\copy customer(cid,name,age,addr) from '/Users/saikumaraindla/Documents/Database_Systems/project/data/Customer.csv' delimiter ',' csv header

/*Account Load Query*/
\copy account(cid,acc_no) from '/Users/saikumaraindla/Documents/Database_Systems/project/data/Account.csv' delimiter ',' csv header

/*CreditCard Load Query*/
\copy CreditCard(CID,Card_limit,Other_cards,Last_Ann_Paid,Last_Credit_Upgrade,Card_type,Balance) from '/Users/saikumaraindla/Documents/Database_Systems/project/data/Credit.csv' delimiter ',' csv header

/*Mortgage Load Query*/
\copy Mortgage(CID,Current_Loans,Loan_Amount,Amount_Paid,Amount_Remain,Interest_Rate,Loan_Type,Loan_Period,Mortgages,Total_Balance) from '/Users/saikumaraindla/Documents/Database_Systems/project/data/Mortgage.csv' delimiter ',' csv header

/*Web_Browsing Load Query*/
\copy web_browsing(Device_id,CID,Tot_time_spent,No_of_Visits,Tot_applications,No_products_Seen,Search_Query) from '/Users/saikumaraindla/Documents/Database_Systems/project/data/Device.csv' delimiter ',' csv header
