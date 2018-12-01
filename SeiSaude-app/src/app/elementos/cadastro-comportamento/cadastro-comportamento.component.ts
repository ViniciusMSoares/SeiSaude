import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-cadastro-comportamento',
  templateUrl: './cadastro-comportamento.component.html',
  styleUrls: ['./cadastro-comportamento.component.scss']
})
export class CadastroComportamentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Comportamento';
  public comportamento = {} as Comportamento;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],//TODO: mudar 'name' para 'nome'
      descricao: [null, Validators.required],
      cadastradoPor: [null, Validators.required]
    });
    this.testaHTTP();
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_COMPORTAMENTO;
    let comportamento = new Comportamento(
      this.formulario.value.nome,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, comportamento).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );

    console.log("Nome do comportamento:", this.formulario.value);
  }

  testaHTTP() {
    let url = Url.URL_BASE + Url.TODOS_ELEMENTOS;
    this.http.get(url).subscribe(result => {
        console.log(result);
      },
      (error: any) => alert('erro')
    );
  }

}
