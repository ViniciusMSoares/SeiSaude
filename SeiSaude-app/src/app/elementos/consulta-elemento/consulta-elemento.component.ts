import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Elemento } from '../../../models/elemento';

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
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.ELEMENTO;
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
          v.cadastradoPor
        ));
        console.log(this.elementos);
      },
      (error: any) => alert('erro')
    );
  }

}
