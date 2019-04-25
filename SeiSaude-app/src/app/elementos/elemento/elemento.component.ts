import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Elemento } from '../../../models/elemento';
import { Url } from '../../../models/url.enum';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {

  public elemento = {} as Elemento;
  public carregado = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.carregaElemento(params.nome).subscribe(result => {
          this.elemento = result as Elemento;
          console.log(this.elemento);

          this.carregado = this.elemento != null;
        });

      }
    );
  }

  carregaElemento(nome) {
    let url = Url.URL_BASE + Url.ELEMENTO;

    const options = nome ?
    { params: new HttpParams().set('nome', nome) } : {};

    return this.http.get(url, options);
  }

  descricaoVazia() {
    return this.elemento.descricao == null || this.elemento.descricao == "";
  }

}
