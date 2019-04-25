export class Sintoma {
    nome: string;
    complemento: string;
    descricao: string;
    cadastradoPor: string;

    public constructor(nome, complemento, descricao, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
}