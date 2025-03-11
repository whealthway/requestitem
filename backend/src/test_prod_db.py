from sqlalchemy.engine import URL
from sqlalchemy import create_engine, MetaData, Table
import pyodbc
from sqlalchemy.orm import sessionmaker




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
database = 'Qreports'

try:
    # conn = pyodbc.connect('Driver={ODBC Driver 13 for SQL Server};Server=10.20.0.10/masci,57020;Database=BBTemp;UID=sa;PWD=B!Zb0x@DmInALI;')
    # engine = create_engine("mssql+pyodbc://sa:B!Zb0x@DmInALI@10.20.0.10,57020/BBTemp?driver=ODBC+Driver+18+for+SQL+Server")
    # print(engine.connect())
    # connection_string = f'DRIVER={driver};SERVER={server};PORT={port};DATABASE={database};UID={username};PWD={password}'
    connection_string = f'DRIVER={driver};SERVER={server};DATABASE=Qreports;UID={username};PWD={password};TrustServerCertificate=yes'
    connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})
    engine1 = create_engine(connection_url, pool_size=10, max_overflow=20, pool_recycle=1800)

    connection_string = f'DRIVER={driver};SERVER={server};DATABASE=BBTemp;UID={username};PWD={password};TrustServerCertificate=yes'
    connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})
    engine2 = create_engine(connection_url, pool_size=10, max_overflow=20, pool_recycle=1800)

    connection_string = f'DRIVER={driver};SERVER={server};DATABASE=BIZBOX_MASCI;UID={username};PWD={password};TrustServerCertificate=yes'
    connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})
    engine3 = create_engine(connection_url, pool_size=10, max_overflow=20, pool_recycle=1800)
    # engine = create_engine(connection_url, use_insertmanyvalues=False, echo=False, pool_pre_ping=True)

    with engine3.connect():
        # metadata1 = MetaData()

        # # Reflect the database schema
        # metadata1.reflect(bind=engine1)

        # # Retrieve and print all table names
        # table_names = metadata1.tables.keys()
        # # print("Tables in the database:", list(table_names))

        # metadata2 = MetaData()

        # # Reflect the database schema
        # metadata2.reflect(bind=engine2)

        # # Retrieve and print all table names
        # table_names = metadata2.tables.keys()
        # print("Tables in the database:", list(table_names))

        metadata3 = MetaData()

        # Reflect the database schema
        metadata3.reflect(bind=engine3, resolve_fks=False)

        # Retrieve and print all table names
        table_names = metadata3.tables.keys()
        table_names = Table('iwItems', metadata3, autoload_with=engine3)
        print("Tables in the database:", table_names)
except Exception as e:
    print(f"Can't Connect due to {e}")