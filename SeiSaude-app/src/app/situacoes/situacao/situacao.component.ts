import { Component, OnInit } from '@angular/core';
import { Situacao } from '../../../models/situacao';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss']
})
export class SituacaoComponent implements OnInit {

  public situacao = {} as Situacao;
  public carregado = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.carregaElemento(params.nome).subscribe(result => {
          this.situacao = result as Situacao;
          console.log(this.situacao);

          this.carregado = this.situacao != null;
        });

      }
    );
  }

  carregaElemento(nome) {
    let url = Url.URL_BASE + Url.SITUACAO;

    const options = nome ?
    { params: new HttpParams().set('nome', nome) } : {};

    return this.http.get(url, options);
  }

  descricaoVazia() {
    return this.situacao.descricao == null || this.situacao.descricao == "";
  }

  voltar() {
    this.router.navigate(['consulta-situacao']);
  }

}
