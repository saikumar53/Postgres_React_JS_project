1) In order to set up the website you need to have postgres and node js installed in your system.

2) Set up the Postgres database in pgadmin and create the table structure using the create.sql
and load.sql commands in Task4.

2) Later, once you have setup the postgres and loaded the data using the ".csv" files in Task4,
install node js or npm in your system.

3) Open the Task3 folder in "Visual Studio"

4) Open one terminal and navigate to the "backend" folder first.

5) Run "npm init" command in backend folder.

6) Open the "Server.js" file and give your local postgre database credentials
that contains all the five relations.

7) Then in termainal do the "npm install all". This is should install all the commands required for running
the backend in your "package.json" file.

8) In, next step run "npm start".

9) This should end your backend setup and it will start running on the "localhost:3000" port.

10)Next open another terminal leaving the first one running for backend.

11) navigate to the frontend folder in the terminal.

12) And do the "npm install all". Same as backend this is should install all the commands required for running
the frontend in your "package.json" file.

13) At last, run the frontend using "npm start".

14) It will ask you port 3000 is busy, shall I continue with another port type "yes" or "y".

15) This should end the setting up of the website and your frontend starts running at the port "localhost:3001" if
3001 is not busy else it will ask you to run on 3002 and so on.

16) Visit localhost:3001 in the browser and start accessing the database.
