import { Quantidade } from "./quantidade";

export class Remedio {
    nome: string;
    complemento: string;
    descricao: string;
    fabricante: string;
    cadastradoPor: string;
    componentes: Quantidade[];

    public constructor(nome, complemento, descricao, fabricante, cadastradoPor, componentes) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.cadastradoPor = cadastradoPor;
        this.componentes = componentes;
    }
}