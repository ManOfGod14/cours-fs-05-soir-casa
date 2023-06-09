CREATE DATABASE test_db;

CREATE TABLE clients (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    adresse VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    UNIQUE(email)
);

INSERT INTO clients (
    id, 
    nom, 
    prenom, 
    email, 
    adresse, 
    created_at, 
    updated_at, 
    deleted_at
) 
VALUES (
    NULL, 
    'John', 
    'Doe', 
    'johndoe@example.com', 
    'Casa, bernoussi', 
    '2020-01-01 12:01:01', 
    NULL, 
    NULL
);