import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Situacao } from '../../../models/situacao';
import { Url } from '../../../models/url.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-situacao',
  templateUrl: './consulta-situacao.component.html',
  styleUrls: ['./consulta-situacao.component.scss']
})
export class ConsultaSituacaoComponent extends FormBaseComponent implements OnInit {

  public title = 'Consulta de Sintomas e Doenças';
  public situacoes = [] as Situacao[];

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
    let url = Url.URL_BASE + Url.SITUACOES;
    let termo = this.formulario.get("nome").value;

    const options = termo ?
    { params: new HttpParams().set('nome', termo) } : {};

    this.http.get(url, options).subscribe(result => {
        let resultList = result as any[];
        //console.log(result);
        this.situacoes = resultList.map(v => new Situacao(
          v.nome,
          v.complemento,
          v.descricao,
          v.cadastradoPor
        ));
        console.log(this.situacoes);
      },
      (error: any) => {
        alert('erro');
        console.log(error);
      }
    );
  }

}
