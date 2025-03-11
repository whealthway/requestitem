import os
from urllib.parse import quote_plus

# Define database connection details
DB_CREDENTIALS = {
    "qreports": ("10.20.0.10", "57020", "Qreports", "sa", "B!Zb0x@DmInALI"),
    "bbtemp": ("10.20.0.10", "57020", "BBTemp", "sa", "B!Zb0x@DmInALI"),
    "bizbox_masci":("10.20.0.10", "57020", "BIZBOX_MASCI", "sa", "B!Zb0x@DmInALI"),
}

def create_db_uri(server, port, database, username, password):
    params = quote_plus(
        f"DRIVER=ODBC Driver 18 for SQL Server;"
        f"SERVER={server},{port};"
        f"DATABASE={database};"
        f"UID={username};"
        f"PWD={password};"
        f"TrustServerCertificate=yes"
    )
    return f"mssql+pyodbc:///?odbc_connect={params}"

# Generate URIs for each database
SQLALCHEMY_BINDS = {name: create_db_uri(*config) for name, config in DB_CREDENTIALS.items()}

# Flask Configurations
class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_BINDS = SQLALCHEMY_BINDS
