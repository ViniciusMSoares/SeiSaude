import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComportamentosComponent } from './comportamentos/comportamentos.component';
import { CadastroComportamentoComponent } from './cadastro-comportamento/cadastro-comportamento.component';

@NgModule({
  declarations: [ComportamentosComponent, CadastroComportamentoComponent],
  imports: [
    CommonModule
  ]
})
export class ElementosModule { }
