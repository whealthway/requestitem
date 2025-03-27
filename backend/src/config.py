import os
from urllib.parse import quote_plus

# Define database connection details
DB_CREDENTIALS = {
    "bizbox_masci":("10.20.0.10", "57020", "BIZBOX_MASCI", "sa", "B!Zb0x@DmInALI"),
    "qreports_masci": ("10.20.0.10", "57020", "Qreports", "sa", "B!Zb0x@DmInALI"),
    "bbtemp_masci": ("10.20.0.10", "57020", "BBTemp", "sa", "B!Zb0x@DmInALI"),
    "bizbox_str":("10.20.36.10", "53965", "BIZBOX_STR", "sa", "B!Zb0x@DmInALI"),
    "bbtemp_str": ("10.20.36.10", "53965", "BBTemp", "sa", "B!Zb0x@DmInALI"),
    "bizbox_sjdm":("10.20.24.10", "51996", "BIZBOX_SJDM", "sa", "B!Zb0x@DmInALI"),
    "bbtemp_sjdm": ("10.20.24.10", "51996", "BBTemp", "sa", "B!Zb0x@DmInALI"),
    "bizbox_dmmc":("10.20.10.10", "49878", "hs8_dmmc", "sa", "Admin@mis"),
    "bbtemp_dmmc": ("10.20.10.10", "49878", "BBTemp", "sa", "Admin@mis"),
    "bizbox_pmvi":("10.20.193.28", "57418", "BIZBOX_PROD", "sa", "B!Zb0x@DmInALI"),
    "bbtemp_pmvi": ("10.20.193.28", "57418", "BBTemp", "sa", "B!Zb0x@DmInALI"),
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
