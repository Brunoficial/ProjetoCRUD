CREATE TABLE projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100),
    estado enum('Ativo', 'Inativo') DEFAULT 'Ativo',
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);