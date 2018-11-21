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
                     {tipo: "Remédio", path: ""},
                     {tipo: "Componente", path: ""},
                     {tipo: "Sintoma", path: "cadastro-sintoma"},
                     {tipo: "Doença", path: "cadastro-doenca"},
                     {tipo: "Indicação", path: ""},
                     {tipo: "Paciente", path: ""}];

  consultas: {}[] = [{tipo: "Elemento", path: ""},
                     {tipo: "Sintoma", path: ""},
                     {tipo: "Doença", path: ""},
                     {tipo: "Componente", path: ""}];
                     
  tratamentos: {}[] = [{tipo: "Novo", path: ""},
                       {tipo: "Em andamento", path: ""}];

  constructor( ) { }

  ngOnInit() {
  }

}
