import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroComportamentoComponent } from './cadastro-comportamento/cadastro-comportamento.component';
import { AppRoutingModule } from '../app-routing.module';
import { CadastroAlimentoComponent } from './cadastro-alimento/cadastro-alimento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRemedioComponent } from './cadastro-remedio/cadastro-remedio.component';
import { CadastroComponenteComponent } from './cadastro-componente/cadastro-componente.component';
import { ConsultaComponenteComponent } from './consulta-componente/consulta-componente.component';
import { ConsultaElementoComponent } from './consulta-elemento/consulta-elemento.component';
import { ElementoComponent } from './elemento/elemento.component';
import { ComponenteComponent } from './componente/componente.component';
import { FormBaseModule } from '../form-base/form-base.module';

@NgModule({
  declarations: [
    CadastroComportamentoComponent,
    CadastroAlimentoComponent,
    CadastroRemedioComponent,
    CadastroComponenteComponent,
    ConsultaComponenteComponent,
    ConsultaElementoComponent,
    ElementoComponent,
    ComponenteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormBaseModule
  ],
  exports: [
  ]
})
export class ElementosModule { }
