# Running the server

Run `npm install`
Run `npx tsc`
And finally `node server.js`

The server will launch at http://localhost:5000

# DB

The DB is Postgres. To connect to it:
Log into psql: `psql -U [USERNAME]`
Create a DB: `CREATE DATABASE constituent_relationship_manager`
From the command line, run migrations: `psql -U [USERNAME] -d constituent_relationship_manager -f path/to/migrations/api/persistence/migrations/0001_create_db_tables.up.sql`
Server to DB connection details are pulled from a .env file, and the client is established in db.ts in persistence
