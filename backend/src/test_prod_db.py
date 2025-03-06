from sqlalchemy.engine import URL
from sqlalchemy import create_engine, MetaData
import pyodbc




# driver = 'ODBC Driver 18 for SQL Server'
# username = 'sa'
# password = 'B!Zb0x@DmInALI'
# server = 'QMEDMNLDB01/MASCI'
# port = 57020
# database = 'BBTemp'

driver = 'ODBC Driver 18 for SQL Server'
username = 'sa'
password = 'B!Zb0x@DmInALI'
server = '10.20.0.10, 57020'
port = 57020
database = 'BBTemp'

try:
    # conn = pyodbc.connect('Driver={ODBC Driver 13 for SQL Server};Server=10.20.0.10/masci,57020;Database=BBTemp;UID=sa;PWD=B!Zb0x@DmInALI;')
    # engine = create_engine("mssql+pyodbc://sa:B!Zb0x@DmInALI@10.20.0.10,57020/BBTemp?driver=ODBC+Driver+18+for+SQL+Server")
    # print(engine.connect())
    # connection_string = f'DRIVER={driver};SERVER={server};PORT={port};DATABASE={database};UID={username};PWD={password}'
    connection_string = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password};TrustServerCertificate=yes'
    connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})
    engine = create_engine(connection_url)
    # engine = create_engine(connection_url, use_insertmanyvalues=False, echo=False, pool_pre_ping=True)

    with engine.connect():
        metadata = MetaData()

        # Reflect the database schema
        metadata.reflect(bind=engine)

        # Retrieve and print all table names
        table_names = metadata.tables.keys()
        print("Tables in the database:", list(table_names))

except Exception as e:
    print(f"Can't Connect due to {e}")