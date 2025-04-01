import Tarefa from ('../models/Tarefa.js');
import connection from ('../config/dbConnect.js');

const TarefaRepository = {

    async findAll() {
        const rows = await connection.query("select * from tarefas", []);
        return rows.map(row => new Tarefa(row.id, row.nome, row.descricao, row.data_incio, row.estado, row.projeto_id));
    },

    async createProjeto(projeto) {
        const result = await connection.query("insert into tarefas (nome, descricao, data_incio, estado, projeto_id) values (?, ?, ?, ?, ?)", 
            [projeto.nome, projeto.descricao, projeto.data_incio, projeto.estado, projeto.projeto_id]
        );
        projeto.id = result.insertId;
        return projeto 
    },

    async deleteProjeto(id) {
        const result = await connection.query("delete from tarefas where id = ?", [id]);
        if (result.affectedRows === 0) {
            throw new Error("Erro ao deletar tarefa: Tarefa não encontrada.");
        };
    },

    async updateProjeto(id, projeto) {
        const result = await connection.query("update tarefas set nome = ?, descricao = ?, data_incio = ?, estado = ?, projeto_id = ? where id = ?", 
            [projeto.nome, projeto.descricao, projeto.data_incio, projeto.estado, projeto.projeto_id, id]
        );
        if (result.affectedRows > 0) {
            return projeto; 
        }
        return null;
    }
}

export default TarefaRepository