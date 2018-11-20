import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  //path deve ser igual ao definido em AppRoutingModule
  cadastros: {}[] = [{tipo: "Comportamento", path: "cadastro-comportamento"},
                     {tipo: "Alimento", path: ""},
                     {tipo: "Remédio", path: ""}];
  consultas: string[] = ["Elemento", "Doença", "Sintoma", "Componente"];
  tratamentos: string[] = ["Novo", "Em andamento"];

  constructor( ) { }

  ngOnInit() {
  }

}
