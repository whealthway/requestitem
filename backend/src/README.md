Setup Virtual environment
install: 
Download Microsoft ODBC Driver 18 for SQL Server (x64)
https://learn.microsoft.com/en-us/sql/connect/odbc/download-odbc-driver-for-sql-server?view=sql-server-ver16

Go to backend folder and open the terminal and run the command below:
"virtual env"
activate the virtual env thru the command below
"Scripts\activate"
install all dependecies
"pip install -r src\requirements.txt"
to run the backend 
"flask run"


Migration commands:
"flask db migrate" -> use to create a migration file
note: always double check the migration file if there is a generated unnecessary drop table

"flask db upgrade" -> use create tables in the database base on the created migration file

