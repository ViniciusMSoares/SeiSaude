export class Comportamento {
    nome: string;
    descricao: string;
    cadastradoPor: string;

    public constructor(nome, descricao, cadastradoPor) {
        this.nome = nome;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
    }
}