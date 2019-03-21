export class Elemento {
    nome: string;
    descricao: string;
    cadastradoPor: string;
    complemento: string;

    public constructor(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
}