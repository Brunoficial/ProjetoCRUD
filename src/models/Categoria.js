class Categoria {
    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    };

    setNome(nome) {
        this._nome = nome 
    };

    setDescricao(descricao) {
        this._descricao = descricao
    }; 

    getId() {
        return this.id
    };

    getNome() {
        return this.nome
    };

    getDescricao() {
        return this.descricao
    };
};

export default Categoria;