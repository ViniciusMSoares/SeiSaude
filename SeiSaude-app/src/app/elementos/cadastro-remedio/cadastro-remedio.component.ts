import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Remedio } from '../../../models/remedio';

@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.scss']
})
export class CadastroRemedioComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Remédio';
  public remedio = {} as Remedio;

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
    let url = Url.URL_BASE + Url.CADASTRO_REMEDIO;
    let remedio = new Remedio(
      this.formulario.value.nome,
      this.formulario.value.complemento,
      this.formulario.value.descricao,
      this.formulario.value.fabricante,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, remedio).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );

    console.log("Remedio:", this.formulario.value);
  }

}
