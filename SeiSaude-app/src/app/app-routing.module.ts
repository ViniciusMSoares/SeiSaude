import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComportamentoComponent } from './elementos/cadastro-comportamento/cadastro-comportamento.component';
import { CadastroAlimentoComponent } from './elementos/cadastro-alimento/cadastro-alimento.component';
import { CadastroSintomaComponent } from './situacoes/cadastro-sintoma/cadastro-sintoma.component';
import { CadastroDoencaComponent } from './situacoes/cadastro-doenca/cadastro-doenca.component';
import { CadastroRemedioComponent } from './elementos/cadastro-remedio/cadastro-remedio.component';
import { CadastroComponenteComponent } from './elementos/cadastro-componente/cadastro-componente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConsultaComponenteComponent } from './elementos/consulta-componente/consulta-componente.component';
import { ConsultaElementoComponent } from './elementos/consulta-elemento/consulta-elemento.component';
import { ConsultaSituacaoComponent } from './situacoes/consulta-situacao/consulta-situacao.component';
import { ElementoComponent } from './elementos/elemento/elemento.component';
import { SituacaoComponent } from './situacoes/situacao/situacao.component';
import { ComponenteComponent } from './elementos/componente/componente.component';
import { EditaComportamentoComponent } from './elementos/edita-comportamento/edita-comportamento.component';
import { CadastroIndicacaoComponent } from './indicacoes/cadastro-indicacao/cadastro-indicacao.component';

const routes: Routes = [
  { path: 'cadastro-alimento', component: CadastroAlimentoComponent },
  { path: 'cadastro-remedio', component: CadastroRemedioComponent },
  { path: 'cadastro-comportamento', component: CadastroComportamentoComponent },
  { path: 'cadastro-sintoma', component: CadastroSintomaComponent },
  { path: 'cadastro-doenca', component: CadastroDoencaComponent },
  { path: 'cadastro-componente', component: CadastroComponenteComponent },
  { path: 'cadastro-indicacao', component: CadastroIndicacaoComponent },

  { path: 'consulta-elemento', component: ConsultaElementoComponent },
  { path: 'consulta-situacao', component: ConsultaSituacaoComponent },
  { path: 'consulta-componente', component: ConsultaComponenteComponent },

  { path: 'elemento/:nome', component: ElementoComponent },
  { path: 'componente/:nome', component: ComponenteComponent },
  { path: 'situacao/:nome', component: SituacaoComponent },

  { path: 'edita-comportamento/:nome', component: EditaComportamentoComponent},

  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
