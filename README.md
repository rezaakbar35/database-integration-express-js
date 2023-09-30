
# Database Integration Using Express JS

This project will focus on seeding the database, performing queries using dynamic routes, and database migration. Express.js is used because it is a lightweight framework that can run very quickly.

The final result of this project is to display a database that has been integrated with the methods mentioned earlier.



## Installation

There are several npm packages that will be used in this project, including express, pg, nodemon (optional), and migrate-db.

```bash
  npm install --save express
  npm install --save pg
  npm install -g nodemon
  npm install -g db-migrate
  npm install -g db-migrate-pg
```
    
## Import Database
Before entering the project, we need to import the database first.

You can download the database here: https://github.com/fathy17/rakamin-expressjs/blob/master/dvdrental.tar

You can check the Entity Relationship Diagram here: https://github.com/fathy17/rakamin-expressjs/blob/master/printable-postgresql-sample-database-diagram.pdf

How to Import Database
1. Extract dvdrental.tar
2. You will find restore.sql
3. Open it and do the instruction in the first section
4. Select all and copy
5. Open SQL Shell and paste all the sql code

- side note:

if you encounter permission error on .dat file,
1. right click on the .dat file and choose properties
2. click on the 'Security' tab
3. click edit and add "Everyone"
4. pastikan read file sudah terchecklist
    
## How to Run Project

- **Seeding Database**
You can start by writing SQL in db/seeding.sql as follows:
```bash
INSERT INTO actor (actor_id, first_name, last_name, last_update) VALUES
(201, 'Prilly', 'Latuconsina', '2023-09-29 08:22:30'),
(202, 'Reza', 'Rahadian', '2023-09-29 08:22:30'),
(203, 'Tara', 'Basro', '2023-09-29 08:22:30'),
(204, 'Angga', 'Yunanda', '2023-09-29 08:22:30'),
(205, 'Ari', 'Irham', '2023-09-29 08:22:30');
```
After that, run the following commands in the terminal:
```bash
node seeding.js
npm start run
```
Then, open localhost:3000/actor, and it will add 5 data according to the data written in seeding.sql.

- **Query Using Dynamic Route**
there are three case in this query using dynamic route such as:

1. Querying for a single table.
2. Querying for a single table where the displayed data will be filtered based on the entered value within the same table.
3. Querying for a single table where the displayed data will be filtered based on the entered value in different tables (up to 2 tables).

kalian bisa langsung melakukan
```bash
npm start run
     or
node index.js
```
Then, open localhost:3000. However, because there are three different cases, the way dynamic routes are written varies.

Example for the first case:
- localhost:3000/film
- localhost:3000/category
- localhost:3000/actor

Example for the second case:
- localhost:3000/film/film_id/72

Example for the third case:
- localhost:3000/film/film_category/film_id/category/category_id/name/Drama

The result of using dynamic routes will display queries based on parameters ('/').

- **Database Migration**
Database migration is a very useful feature where you can modify the database and reset it if there are errors.

To use it, you can write SQL code in migrations\sqls\20230929083816-initialize-up.sql as shown below:

```bash
ALTER TABLE actor
ADD age INT;
```

You can check the result at localhost:3000/actor.
