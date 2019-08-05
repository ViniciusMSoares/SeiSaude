import { Component, OnInit } from '@angular/core';
import { Valor } from '../../../models/valor';
import { Componente } from '../../../models/componente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { FormBuilder } from '@angular/forms';
import { FormBaseComponent } from '../../form-base/form-base.component';

@Component({
  selector: 'app-consulta-valor',
  templateUrl: './consulta-valor.component.html',
  styleUrls: ['./consulta-valor.component.scss']
})
export class ConsultaValorComponent extends FormBaseComponent implements OnInit {

  public title = 'Consulta de Valor Nutricional';
  public valores = [] as Valor[];
  public componentes = [] as Componente[];

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
    const url = Url.URL_BASE + Url.VALORES;
    const termo = this.formulario.get('nome').value;

    const options = termo ?
      { params: new HttpParams().set('nome', termo) } : {};

    this.http.get(url, options).subscribe(result => {
        const resultList = result as any[];
        // console.log(result);
        this.valores = resultList.map(v => new Valor(
          v.nome,
          v.quantidade,
          v.unidade,
          v.valorDiario
        ));
        console.log(this.valores);
      },
      (error: any) => alert('erro')
    );
  }

}
