import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown/ngx-bootstrap-dropdown';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  // path deve ser igual ao definido em AppRoutingModule
  cadastros: {}[] = [{tipo: 'Comportamento', path: 'cadastro-comportamento'},
                     {tipo: 'Alimento', path: 'cadastro-alimento'},
                     {tipo: 'Remédio', path: 'cadastro-remedio'},
                     {tipo: 'Componente', path: 'cadastro-componente'},
                     {tipo: 'Sintoma', path: 'cadastro-sintoma'},
                     {tipo: 'Doença', path: 'cadastro-doenca'},
                     {tipo: 'Indicação', path: ''},
                     {tipo: 'Paciente', path: ''}];

  consultas: {}[] = [{tipo: 'Elemento', path: 'consulta-elemento'},
                     {tipo: 'Sintoma/Doença', path: 'consulta-situacao'},
                     {tipo: 'Componente', path: 'consulta-componente'},
                     {tipo: 'Valor Nutricional', path: 'consulta-valor'}];
  tratamentos: {}[] = [{tipo: 'Novo', path: ''},
                       {tipo: 'Em andamento', path: ''}];

  constructor( ) { }

  ngOnInit() {
  }

}
