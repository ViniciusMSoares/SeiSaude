import { Component, OnInit } from '@angular/core';
import { Componente } from '../../../models/componente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { FormBuilder } from '@angular/forms';
import { FormBaseComponent } from '../../form-base/form-base.component';

@Component({
  selector: 'app-consulta-componente',
  templateUrl: './consulta-componente.component.html',
  styleUrls: ['./consulta-componente.component.scss']
})
export class ConsultaComponenteComponent extends FormBaseComponent implements OnInit {

  public title = 'Consulta de Componentes';
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
    let url = Url.URL_BASE + Url.CADASTRO_COMPONENTE;
    let termo = this.formulario.get("nome").value;

    const options = termo ?
    { params: new HttpParams().set('nome', termo) } : {};

    this.http.get(url, options).subscribe(result => {
        let resultList = result as any[];
        console.log(result);
        this.componentes = resultList.map(v => new Componente(
          v.nome,
          v.complemento
        ));
        console.log(this.componentes);
      },
      (error: any) => alert('erro')
    );
  }

}
