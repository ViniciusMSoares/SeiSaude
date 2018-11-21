import { Component, OnInit } from '@angular/core';
import { Doenca } from '../../../models/doenca';

@Component({
  selector: 'app-cadastro-doenca',
  templateUrl: './cadastro-doenca.component.html',
  styleUrls: ['./cadastro-doenca.component.scss']
})
export class CadastroDoencaComponent implements OnInit {

  public title = 'Cadastro de Doença';
  public doenca = {} as Doenca;

  constructor() {
   }

  ngOnInit() {
  }

}
