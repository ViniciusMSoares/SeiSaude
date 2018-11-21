import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ElementosModule } from './elementos/elementos.module';
import { SituacoesModule } from './situacoes/situacoes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementosModule,
    SituacoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
