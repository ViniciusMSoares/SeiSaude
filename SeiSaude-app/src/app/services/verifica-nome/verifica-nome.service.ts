import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificaNomeService {

  constructor(private http: HttpClient) { }

  verificarNome(nome: string, complemento: string) {
    return this.http.get(Url.URL_BASE+Url.TODOS_ELEMENTOS)
      .pipe(
        delay(2000),
        map((dados: {name: string, complemento: string}[]) => dados.filter(v => (v.name + v.complemento).toLowerCase().replace(/\s/g, "") === (nome + complemento).toLowerCase().replace(/\s/g, ""))),
        tap(console.log),
        map((dados: any[]) => dados.length > 0 ),
        tap(console.log)
      );
  }

  verificarNomeSituacao(nome: string, complemento: string) {
    return this.http.get(Url.URL_BASE+Url.TODAS_SITUACOES)
      .pipe(
        delay(2000),
        map((dados: {name: string, complemento: string}[]) => dados.filter(v => (v.name + v.complemento).toLowerCase().replace(/\s/g, "") === (nome + complemento).toLowerCase().replace(/\s/g, ""))),
        tap(console.log),
        map((dados: any[]) => dados.length > 0 ),
        tap(console.log)
      );
  }

  verificarNomeComponente(nome: string, complemento: string) {
    return this.http.get(Url.URL_BASE+Url.TODOS_COMPONENTES)
      .pipe(
        delay(2000),
        map((dados: {nome: string, complemento: string}[]) => dados.filter(v => (v.nome + v.complemento).toLowerCase().replace(/\s/g, "") === (nome + complemento).toLowerCase().replace(/\s/g, "") )),
        tap(console.log),
        map((dados: any[]) => dados.length > 0 ),
        tap(console.log)
      );
  }
}
