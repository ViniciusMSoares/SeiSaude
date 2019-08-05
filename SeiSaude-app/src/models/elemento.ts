export class Elemento {
    nome: string;
    descricao: string;
    cadastradoPor: string;
    complemento: string;
    id: number;
    tipo: number;

    public constructor(nome, complemento, descricao, cadastradoPor, id, tipo) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.cadastradoPor = cadastradoPor;
        this.id = id;
        this.tipo = tipo;
    }

}
