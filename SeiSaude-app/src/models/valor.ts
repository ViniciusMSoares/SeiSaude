export class Valor {
    nome: string;
    quantidade: string;
    unidade: string;
    valorDiario: string;

    public constructor(nome, quantidade, unidade, valorDiario) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.unidade = unidade;
        this.valorDiario = valorDiario;
    }
}
