from sqlalchemy import create_engine

user = 'sa'
password = 'B!Zb0x@DmInALI'
host = '10.20.0.10/MASCI'
port = 1433
database = 'BBTemp'

def get_connection():
    return create_engine(url=f"postgresql+psycopg2://{user}:{password}@{host}:{port}/{database}"
)

if __name__ == '__main__':
    try:
        engine = get_connection()
        print(f"Connection to the {host} for user {user} created successfully.")
    except Exception as ex:
        print("Connection could not be made due to the following error:\n", ex)