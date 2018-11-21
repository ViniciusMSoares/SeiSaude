import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';

@Component({
  selector: 'app-comportamentos',
  templateUrl: './comportamentos.component.html',
  styleUrls: ['./comportamentos.component.scss']
})
export class ComportamentosComponent implements OnInit {

  public comportamento = {} as Comportamento;

  constructor() { }

  ngOnInit() {
  }

}
