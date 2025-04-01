import Usuario from "../models/Usuario";
import connection from "../config/dbConnect.js";

const UsuarioRepository = {

    async findAll() {
        const rows = await connection.query("SELECT * FROM usuarios", []);
        return rows.map(row => new Usuario(row.id, row.nome, row.email, row.senha, row.permissao));
    },

    async createUsuario(usuario) {
        const result = await connection.query("INSERT INTO usuarios (nome, email, senha_hash, criado_em) VALUES (?, ?, ?, ?)", 
            [usuario.nome, usuario.email, usuario.senha_hash, usuario.criado_em]
        );
        usuario.id = result.insertId;
        return usuario; 
    },

    async deleteUsuario(id) {
        const result = await connection.query("DELETE FROM usuarios WHERE id = ?", [id]);
        if (result.affectedRows === 0) {
            throw new Error("Erro ao deletar usuario: Usuario não encontrado.");
        };
    },

    async updateUsuario(id, usuario) {
        const result = await connection.query("UPDATE usuarios SET nome = ?, email = ?, senha_hash = ?, criado_em = ? WHERE id = ?", 
            [usuario.nome, usuario.email, usuario.senha_hash, usuario.criado_em, id]
        );
        if (result.affectedRows > 0) {
            return usuario; 
        }
        return null;
    }
}

export default UsuarioRepository