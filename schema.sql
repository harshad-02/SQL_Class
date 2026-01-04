CREATE TABLE user(
    id varchar(50) PRIMARY KEY , 
    username VARCHAR(50) UNIQUE,
    email varchar(50) unique not null,
    password varchar(50) not null 
);

