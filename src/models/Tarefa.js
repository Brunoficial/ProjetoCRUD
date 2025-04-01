class Tarefa {
    constructor(id, nome, descricao, estado, projeto_id) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.estado = estado;
        this.projeto_id = projeto_id;
    };

    setNome(nome) {
        this._nome = nome 
    };

    setDescricao(descricao) {
        this._descricao = descricao
    };

    setEstado(estado) {
        this._estado = estado
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

    getEstado() {
        return this.estado
    };

    getProjetoId() {
        return this.projeto_id
    };
};

export default Tarefa;

