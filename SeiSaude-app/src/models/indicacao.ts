export class Indicacao {
    dosagem: number;
    efeito: string;
    unidade: string;
    tipo: string;
    id_elemento: number;
    situacaoID: number;
    tipoPessoaID: number;

    public constructor(dosagem, efeito, unidade, tipo, elementoID, situacaoID, tipoPessoaID) {
        this.dosagem = dosagem;
        this.efeito = efeito;
        this.unidade = unidade;
        this.tipo = tipo;
        this.id_elemento = elementoID;
        this.situacaoID = situacaoID;
        this.tipoPessoaID = tipoPessoaID;
    }
}
