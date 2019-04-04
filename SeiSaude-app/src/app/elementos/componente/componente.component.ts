import { Component, OnInit } from '@angular/core';
import { Componente } from '../../../models/componente';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {

  public componente = {} as Componente;
  public carregado = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.carregaElemento(params.nome).subscribe(result => {
          this.componente = result as Componente;
          console.log(this.componente);

          this.carregado = this.componente != null;
        });

      }
    );
  }

  carregaElemento(nome) {
    let url = Url.URL_BASE + Url.CADASTRO_COMPONENTE;

    const options = nome ?
    { params: new HttpParams().set('nome', nome) } : {};

    return this.http.get(url, options);
  }

}
