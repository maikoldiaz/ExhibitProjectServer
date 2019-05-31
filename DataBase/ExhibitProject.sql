CREATE DATABASE ExhibitProjects;
USE ExhibitProjects;

Create Table Projects(
    Id Int NOT NULL AUTO_INCREMENT PRIMARY KEY.
    Title VARCHAR(180),
    Description VARCHAR(500),
    Image Varchar(200),
    SaveDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);