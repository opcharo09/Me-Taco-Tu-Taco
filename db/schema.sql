CREATE DATABASE tacos_db;
 
 USE tacos_db;

 CREATE TABLE tacos
 (
     id INT NOT NULL AUTO_INCREMENT,
     taco_name VARCHAR (50) NOT NULL,
     shell VARCHAR (10),
     vegeterian BOOLEAN ,
     pick_up BOOLEAN,
     PRIMARY KEY (id)
     )