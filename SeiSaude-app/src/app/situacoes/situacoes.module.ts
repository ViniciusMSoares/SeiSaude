import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { CadastroSintomaComponent } from './cadastro-sintoma/cadastro-sintoma.component';
import { CadastroDoencaComponent } from './cadastro-doenca/cadastro-doenca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaSituacaoComponent } from './consulta-situacao/consulta-situacao.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { FormBaseModule } from '../form-base/form-base.module';

@NgModule({
  declarations: [CadastroSintomaComponent,
                 CadastroDoencaComponent,
                 ConsultaSituacaoComponent,
                 SituacaoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormBaseModule
  ]
})
export class SituacoesModule { }
