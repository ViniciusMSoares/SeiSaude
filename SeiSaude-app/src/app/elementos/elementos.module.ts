import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComportamentosComponent } from './comportamentos/comportamentos.component';
import { CadastroComportamentoComponent } from './cadastro-comportamento/cadastro-comportamento.component';
import { AppRoutingModule } from '../app-routing.module';
import { CadastroAlimentoComponent } from './cadastro-alimento/cadastro-alimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ComportamentosComponent,
    CadastroComportamentoComponent,
    CadastroAlimentoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
  ]
})
export class ElementosModule { }
