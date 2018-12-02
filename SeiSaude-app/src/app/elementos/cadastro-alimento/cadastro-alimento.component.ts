import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../../models/alimento';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-cadastro-alimento',
  templateUrl: './cadastro-alimento.component.html',
  styleUrls: ['./cadastro-alimento.component.scss']
})
export class CadastroAlimentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Alimento';
  public alimento = {} as Alimento;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      complemento: [null],
      descricao: [null],
      fabricante: [null],
      cadastradoPor: [null, Validators.required]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_ALIMENTO;
    let alimento = new Alimento(
      this.formulario.value.nome,
      this.formulario.value.complemento,
      this.formulario.value.descricao,
      this.formulario.value.fabricante,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, alimento).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );

    console.log("Alimento:", this.formulario.value);
  }

}
