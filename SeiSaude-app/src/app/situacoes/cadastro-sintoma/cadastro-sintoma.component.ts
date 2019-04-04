import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../../../models/sintoma';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-cadastro-sintoma',
  templateUrl: './cadastro-sintoma.component.html',
  styleUrls: ['./cadastro-sintoma.component.scss']
})
export class CadastroSintomaComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Sintoma';
  public sintoma = {} as Sintoma;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
      complemento: [""],
      descricao: [""],
      cadastradoPor: ["", Validators.required]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_SINTOMA;
    let sintoma = new Sintoma(
      this.formulario.value.nome,
      this.formulario.value.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, sintoma).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );
  }

}
