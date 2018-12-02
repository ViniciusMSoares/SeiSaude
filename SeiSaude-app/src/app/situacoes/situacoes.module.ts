import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SintomasComponent } from './sintomas/sintomas.component';
import { DoencasComponent } from './doencas/doencas.component';
import { CadastroSintomaComponent } from './cadastro-sintoma/cadastro-sintoma.component';
import { CadastroDoencaComponent } from './cadastro-doenca/cadastro-doenca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SintomasComponent,
                 DoencasComponent,
                 CadastroSintomaComponent,
                 CadastroDoencaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SituacoesModule { }
