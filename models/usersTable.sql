 -- Create a User Account table
 CREATE TABLE Users (
    email varchar(255),
    firstName varchar(255),
    lastName varchar(255),
    passwordDigest varchar(255),
    roles varchar(255),
    PRIMARY KEY (email)
    );





-->        psql --host=ec2-44-206-197-71.compute-1.amazonaws.com --port=5432 --username=anuolcrzualnmb --password --dbname=d2lvnbf6ipvkib

-- INSERT INTO Users (email, firstName, lastName, passwordDigest, roles) VALUES ('stan@crazymail.com', 'Stan', 'Stanton', '1234', 'Manager');
