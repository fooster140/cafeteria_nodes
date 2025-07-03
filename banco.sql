CREATE DATABASE cafeteria;
USE cafeteria;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2),
    imagem VARCHAR(255)
);