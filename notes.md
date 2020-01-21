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


