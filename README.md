# Simple Products API - Node.js (Express), PostgreSQL

This app consists of a simple API logic written using Node.js (ESM), Express, Knex, PostgreSQL. No authorization was used in the project. Simple seeds and migrations used in the project are available in the folder.

<br />

## Installing

* To install just do this :-)
```
npm install
```

* All dependencies of the app are in the package.json file
* Dependencies to install:
```
"dependencies": {
    "express": "^4.19.2",
    "knex": "^3.1.0",
    "pg": "^8.11.5"
  }
```

<br />

## Database (PostgreSQL)

You will need to download PostgreSQL and configure it.
All migration files and seeds files are in the project.
```
data/migrations
data/seeds
```

When you want to set up the database connection, unless you are working in production, it will be sufficient to make changes in the development section of the `knexfile.js` file in the main directory.
```
connection: {
            database: "app",
            user: "admin",
            password: "admin"
        }
```

* Command line to migrate migrations:
```
knex migrate:up
```
```
knex migrate:latest
```

* Command line to add seeds:
```
knex seed:run
```

### IMPORTANT!!! 
`Note:` If you get an "undefined command" error when running the knex command, you will need to install `knex` globally.
```
npm install -g knex
```
`Note:` If tables are not created in the database after migration, delete the `knex_migrations` and `knex_migrations_lock` tables created in the database and try to migrate again.

<br />

## Helpful command lines (PostgreSQL)
 Here are some helpful commands for you to access and use on 'PowerShell' after installing the PostgreSQL database.
 
 `Suggestion:` Using this site or other database design tools and visualizing your thoughts while adding tables to the database will always make you feel comfortable.
Link: `https://app.dbdesigner.net/`

To connect to the database:
```
psql -d postgres -U <password>
```

Get user list 
```
\du;
```

Database list
```
\list;
```

Table list

```
\dt;
```

Get table 
```
SELECT * FROM <table_name>;
```

To connect to an internal database and switch to the command line:
```
\c <database_name>;
```

To export the database as .sql:
```
pg_dump -U <username> -d <database> -f <db_name.sql>
```

To role the user to create a database:
```
ALTER ROLE <username> CREATEROLE CREATEDB;
```

<br />

## API Structure

There are two extra simple 'middleware' within the project. `logger.js` to log the requests to the console and `errorHandling.js` to obtain the status code and error description of the errors.

### Executing program
When you run the program without changing anything, it will run on port 5000 by default.
Example for localhost:
```
http://localhost:5000
```

### GET method queries

Getting the list of all products in JSON format.
```
http://localhost:5000/products/getall
```

Requesting a product by ID
```
http://localhost:5000/products/get/1
```


### POST method queries (You can try with postman)

Add new product
```
http://localhost:5000/products/create
```
Example data to be sent:
```
{
    "title": "AirPods Pro",
    "descriptions": "AirPods Pro are dust resistant....",
    "price": 850.45,
    "category_id": 3,
    "brand_id": 1
}
```

### DELETE method queries 

To delete the product
```
http://localhost:5000/products/delete/3
```

### PATCH method queries 
```
  http://localhost:5000/products/update/31
```
Example data to be sent:
```
{
    "title": "AirPods Pro V6",
    "descriptions": "AirPods Pro are dust resistant....",
    "price": 830.45,
    "category_id": 3,
    "brand_id": 1
}
```

<br />

## Some screenshots

<p align="center">
  <img src="https://github.com/kamrankarimov/simple-app-nodejs-express/assets/11867154/8f32d6ea-de39-4a27-b84d-b852be0b8484" width="700" />
  <br /> <br />
  <img src="https://github.com/kamrankarimov/simple-app-nodejs-express/assets/11867154/87ce8e93-b794-4df3-9ffe-1b9d4ab7c28f" width="700" />
  <br /> <br />
  <img src="https://github.com/kamrankarimov/simple-app-nodejs-express/assets/11867154/a813b121-085b-4e3a-8a5a-b9707846a49e" width="700" />
  <br /><br />
  <img src="https://github.com/kamrankarimov/simple-app-nodejs-express/assets/11867154/6d83260e-882b-40c8-a5db-964fb6650339" width="700" />
</p>


## Authors

Kamran Karimov

