import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Elemento } from '../../../models/elemento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-elemento',
  templateUrl: './consulta-elemento.component.html',
  styleUrls: ['./consulta-elemento.component.scss']
})
export class ConsultaElementoComponent extends FormBaseComponent implements OnInit {

  public title = 'Consulta de Elementos';
  public elementos = [] as Elemento[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    router: Router
  ) {
    super(router);
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.ELEMENTOS;
    let termo = this.formulario.get("nome").value;

    const options = termo ?
    { params: new HttpParams().set('nome', termo) } : {};

    this.http.get(url, options).subscribe(result => {
        let resultList = result as any[];
        //console.log(result);
        this.elementos = resultList.map(v => new Elemento(
          v.name,
          v.complemento,
          v.descricao,
          v.cadastradoPor,
          v.id
        ));
        console.log(this.elementos);
      },
      (error: any) => alert('erro')
    );
  }

}
