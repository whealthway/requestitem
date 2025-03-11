from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from urllib.parse import quote_plus

# Function to create a database engine
def create_db_engine(server, port, database, username, password):
    params = quote_plus(
        f"DRIVER=ODBC Driver 18 for SQL Server;"
        f"SERVER={server},{port};"
        f"DATABASE={database};"
        f"UID={username};"
        f"PWD={password};"
        f"TrustServerCertificate=yes"
    )
    return create_engine("mssql+pyodbc", query={"odbc_connect": params})

# Define connection details
DB_CONFIG = {
    "qreports": ("10.20.0.10", "57020", "Qreports", "sa", "B!Zb0x@DmInALI"),
    "bbtemp": ("10.20.0.10", "57020", "BBTemp", "sa", "B!Zb0x@DmInALI"),
    "bizbox_masci": ("10.20.0.10", "57020", "BIZBOX_MASCI", "sa", "B!Zb0x@DmInALI"),
}

# Create database engines
engines = {key: create_db_engine(*config) for key, config in DB_CONFIG.items()}

# Create session makers
SessionLocal = {key: sessionmaker(bind=engine) for key, engine in engines.items()}

# Example usage: Get a session
def get_db_session(db_name):
    if db_name in SessionLocal:
        return SessionLocal[db_name]()
    raise ValueError(f"Invalid database name: {db_name}")

# Example: Querying data
def fetch_data(db_name, query):
    session = get_db_session(db_name)
    try:
        result = session.execute(query)
        return result.fetchall()
    finally:
        session.close()

# Example usage
if __name__ == "__main__":
    query = "SELECT * FROM Branch"
    results = fetch_data("qreports", query)
    for row in results:
        print(row)
