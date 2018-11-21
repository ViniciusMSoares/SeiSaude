import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../../models/alimento';

@Component({
  selector: 'app-cadastro-alimento',
  templateUrl: './cadastro-alimento.component.html',
  styleUrls: ['./cadastro-alimento.component.scss']
})
export class CadastroAlimentoComponent implements OnInit {

  public alimento = {} as Alimento;
  constructor() { }

  ngOnInit() {
  }

}
