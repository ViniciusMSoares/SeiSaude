import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SintomasComponent } from './sintomas/sintomas.component';
import { DoencasComponent } from './doencas/doencas.component';
import { CadastroSintomaComponent } from './cadastro-sintoma/cadastro-sintoma.component';
import { CadastroDoencaComponent } from './cadastro-doenca/cadastro-doenca.component';

@NgModule({
  declarations: [SintomasComponent,
                 DoencasComponent,
                 CadastroSintomaComponent,
                 CadastroDoencaComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SituacoesModule { }
