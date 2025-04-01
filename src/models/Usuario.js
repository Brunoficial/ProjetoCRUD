class Usuario {
    constructor(id, nome, email, senha_hash) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha_hash = senha_hash;
    };

    setNome(nome) {
        this._nome = nome 
    };

    setEmail(email) {
        this._email = email
    };

    getId() {
        return this.id
    };

    getNome() {
        return this.nome
    };

    getEmail() {
        return this.email
    };

    getSenhaHash() {
        return this.senha_hash
    };
};

export default Usuario;