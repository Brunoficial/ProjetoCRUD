import Categoria from '../models/categoriaModel.js';
import connection from '../config/dbConnect.js';

const CategoriaRepository = {

    async findAll() {
        const rows = await connection.query("select * from categorias", []);
        return rows.map(row => new Categoria(row.id, row.nome, row.descricao));
    },

    async createCategoria(categoria) {
        const result = await connection.query("insert into categorias (nome, descricao) values (?, ?)", 
            [categoria.nome, categoria.descricao]
        );
        categoria.id = result.insertId;
        return categoria; 
    },

    async deleteCategoria(id) {
        const  result = await connection.query("delete from categorias where id = ?", [id]);
        if (result.affectedRows === 0) {
            throw new Error("Erro ao deletar categoria: Categoria não encontrada.");
        };
    },

    async updateCategoria(id, categoria) {
        const result = await connection.query("update categorias set nome = ?, descricao = ? where id = ?", 
            [categoria.nome, categoria.descricao, id]
        );
        if (result.affectedRows > 0) {
            return categoria; 
        }
        return null;
    }

    }

    export default CategoriaRepository
    

