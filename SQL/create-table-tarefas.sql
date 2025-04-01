CREATE TABLE tarefas (
    id int AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(100),
    data_incio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado enum('Pendente', 'Em andamento', 'Concluída') DEFAULT 'Pendente',
    projeto_id INT,
    FOREIGN KEY (projeto_id) REFERENCES projetos(id)
);

