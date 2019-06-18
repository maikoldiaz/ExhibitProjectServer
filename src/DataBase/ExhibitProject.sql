CREATE DATABASE ExhibitProjects;
USE ExhibitProjects;

Create Table Projects(
    id Int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(500),
    img Varchar(200),
    saveDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

drop database ExhibitProjects;