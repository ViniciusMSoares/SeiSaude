import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComportamentoComponent } from './elementos/cadastro-comportamento/cadastro-comportamento.component';
import { CadastroAlimentoComponent } from './elementos/cadastro-alimento/cadastro-alimento.component';

const routes: Routes = [
  { path: 'cadastro-comportamento', component: CadastroComportamentoComponent },

  { path: 'cadastro-alimento', component: CadastroAlimentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
