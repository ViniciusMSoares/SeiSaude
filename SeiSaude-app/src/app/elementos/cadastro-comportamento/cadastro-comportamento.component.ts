import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      name: [null, Validators.required],//TODO: mudar 'name' para 'nome'
      descricao: [null, Validators.required],
      cadastradoPor: [null, Validators.required]
    });
  }

  submit() {
    let url = "https://sei-saude.herokuapp.com/elemento/comportamento";
    let comportamento = new Comportamento;
    comportamento.cadastradoPor = this.formulario.value.cadastradoPor;//TODO: adicionar esse campo ao form
    comportamento.descricao = this.formulario.value.descricao;
    comportamento.name = this.formulario.value.name;
    this.http.post(url, comportamento).subscribe(result => {
      console.log(result);
      },
      (error: any) => alert('erro')
    );

    console.log("Nome do comportamento:", this.formulario.value);
    this.testaHTTP();
  }

  testaHTTP() {
    let url = "https://sei-saude.herokuapp.com/all_elemento";
    this.http.get(url).subscribe(result => {
        console.log(result);
      },
      (error: any) => alert('erro')
    );
  }

}
