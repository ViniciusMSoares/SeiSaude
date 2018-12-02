export class Remedio {
    nome: string;
    complemento: string;
    descricao: string;
    fabricante: string;
    cadastradoPor: string;

    public constructor(nome, complemento, descricao, fabricante, cadastradoPor) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.cadastradoPor = cadastradoPor;
    }
}