import { Quantidade } from "./quantidade";
import { Valor } from "./valor";

export class Alimento {
    nome: string;
    complemento: string;
    descricao: string;
    fabricante: string;
    cadastradoPor: string;
    componentes: Quantidade[];
    valNutricionais: Valor[];

    public constructor(nome, complemento, descricao, fabricante, cadastradoPor, componentes, valNutricionais) {
        this.nome = nome;
        this.complemento = complemento;
        this.descricao = descricao;
        this.fabricante = fabricante;
        this.cadastradoPor = cadastradoPor;
        this.componentes = componentes;
        this.valNutricionais = valNutricionais;
    }
}