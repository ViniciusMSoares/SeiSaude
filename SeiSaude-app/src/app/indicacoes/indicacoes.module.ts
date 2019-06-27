import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroIndicacaoComponent } from './cadastro-indicacao/cadastro-indicacao.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormBaseModule } from '../form-base/form-base.module';

@NgModule({
  declarations: [CadastroIndicacaoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormBaseModule
  ]
})
export class IndicacoesModule { }
