import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';

@Component({
  selector: 'app-cadastro-comportamento',
  templateUrl: './cadastro-comportamento.component.html',
  styleUrls: ['./cadastro-comportamento.component.scss']
})
export class CadastroComportamentoComponent implements OnInit {

  public title = 'Cadastro de Comportamento';
  public comportamento = {} as Comportamento;

  constructor() { }

  ngOnInit() {
  }

}
