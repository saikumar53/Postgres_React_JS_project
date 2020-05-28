/*Customer table structure*/
Create table Customer( CID int,
Name varchar not null,
Age int not null,
Addr  varchar not null,
Primary Key(CID))

/*Account table structure*/
Create table Account(CID int,
Acc_no int not null,
Foreign key(CID) references Customer on delete cascade,
unique(acc_no))

/*Credit Card Table Structure*/
Create table CreditCard(CID int,
Card_limit int not null,
Other_cards int,
Last_Ann_Paid Date not null,
Last_Credit_Upgrade Date not null,
Card_type varchar not null,
Balance int,
Foreign key(CID) references Customer on delete cascade)

/*Mortgage Table Structure*/
Create table Mortgage(CID int,
Current_Loans int default 0,
Loan_Amount int default 0,
Amount_Paid int default 0,
Amount_Remain int default 0,
Interest_Rate int default 0,
Loan_Type varchar,
Loan_Period int default 0,
Mortgages int default 0,
Total_Balance int,
Foreign key(CID) references Customer on delete cascade)

/*Web_Browsing table Structure*/
Create table Web_Browsing(
Device_id varchar not null,
CID int,
Tot_time_spent int default 0,
No_of_Visits  int default 0 ,
Tot_applications int default 0,
No_products_Seen int default 0,
Search_Query int default 0,
Foreign key(CID) references Customer on delete cascade)
