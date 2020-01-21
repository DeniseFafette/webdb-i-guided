### SQL

###### DQL ####### DATA QUERY

syntax
SELECT <column names> FROM <table name> WHERE <column name> = <some value>;

examples
SELECT email FROM users WHERE name = 'Jason Maurer';

SELECT email
FROM users
WHERE name = 'Jason Maurer';

###### DML ####### DATA MANIPULATION

INSERT INTO <table name> (<column name>)
VALUES (<some values>);

UPDATE <table name>
SET <column name> = <some value>
WHERE <column name> = <some value>;

DELETE FROM <table name>
WHERE <column name> = <some value>;

## USING and ORM

https://sequelize.org/

Instead of "INSERT INTO users"

const user =  new User()
user.save()

Note: not very flexible

## USING a Query Builder

Instead of "INSERT INTO users"

table("users").insert()





