import Projeto from '../models/Projeto.js';
import connection from '../config/dbConnect.js';

const ProjetoRepository = {
    async findAll() {
        const rows = await connection.querry("select * from projetos", []);
        return rows.map(row => new Projeto(row.id, row.nome, row.descricao, row.estado, row.categoria_id));
    },

    async createProjeto(projeto) {
        const result = await connection.query("insert into projetos (nome, descricao, estado, categoria_id) values (?, ?, ?, ?)", 
            [projeto.nome, projeto.descricao, projeto.estado, projeto.categoria_id]
        );
        projeto.id = result.insertId;
        return projeto 
    },

    async deleteProjeto(id) {
        const result = await connection.query("delete from projetos where id = ?", [id]);
        if (result.affectedRows === 0) {
            throw new Error("Erro ao deletar projeto: Projeto não encontrado.");
        };
    },

    async updateProjeto(id, projeto) {
        const result = await connection.query("update projetos set nome = ?, descricao = ?, estado = ?, categoria_id = ? where id = ?", 
            [projeto.nome, projeto.descricao, projeto.estado, projeto.categoria_id, id]
        );
        if (result.affectedRows > 0) {
            return projeto; 
        }
        return null;
    }
}

export default ProjetoRepository
