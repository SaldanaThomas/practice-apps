DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE checkout (
  id INT AUTO_INCREMENT,
  sessionId VARCHAR(100) UNIQUE,
  name VARCHAR(20),
  email VARCHAR(20),
  password VARCHAR(20),
  address VARCHAR(50),
  phone VARCHAR(14),
  card VARCHAR(20),
  expDate VARCHAR(5),
  cvv VARCHAR(4),
  billZip VARCHAR(9),
  PRIMARY KEY (id)
);