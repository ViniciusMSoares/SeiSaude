import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../../../models/sintoma';

@Component({
  selector: 'app-cadastro-sintoma',
  templateUrl: './cadastro-sintoma.component.html',
  styleUrls: ['./cadastro-sintoma.component.scss']
})
export class CadastroSintomaComponent implements OnInit {

  public title = 'Cadastro de Sintoma';
  public sintoma = {} as Sintoma;

  constructor() { }

  ngOnInit() {
  }

}
