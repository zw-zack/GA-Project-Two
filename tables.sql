-- create users table
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255) UNIQUE,
  email varchar(255) UNIQUE,
  password varchar(255),
  personality varchar(255)
);
