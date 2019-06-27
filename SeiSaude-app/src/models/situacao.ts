export class Situacao {
    nome: string;
    descricao: string;
    cadastradoPor: string;
    complemento: string;
    id: number;

    public constructor(nome, complemento, descricao, cadastradoPor, id) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
        this.id = id;
    }
}