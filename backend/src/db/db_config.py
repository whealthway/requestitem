import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()

try:
    # Establish the connection
    connection = psycopg2.connect(
        dbname=os.getenv('DB_NAME'),
        user=os.getenv('USER'),
        password=os.getenv('PASSWORD'),
        host=os.getenv('HOST'),
        port=os.getenv('PORT')
    )
    # Create a cursor object
    cursor = connection.cursor()
    print("Connection to PostgreSQL DB successful")

    # Execute a query
    cursor.execute("SELECT version();")
    # Fetch the result
    db_version = cursor.fetchone()
    print(f"PostgreSQL database version: {db_version}")

except Exception as error:
    print(f"Error while connecting to PostgreSQL: {error}")

finally:
    pass
    # Close the cursor and connection
    # if connection:
    #     cursor.close()
    #     connection.close()
    #     print("PostgreSQL connection is closed")
