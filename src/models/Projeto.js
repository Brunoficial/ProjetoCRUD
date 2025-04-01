class Projeto {
    constructor(id, nome, descricao, estado, categoria_id) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.estado = estado;
        this.categoria_id = categoria_id;
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

    getCateogriaId() {
        return this.categoria_id
    };
};

export default Projeto;