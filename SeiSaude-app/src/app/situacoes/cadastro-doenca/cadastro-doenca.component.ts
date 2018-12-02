import { Component, OnInit } from '@angular/core';
import { Doenca } from '../../../models/doenca';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';

@Component({
  selector: 'app-cadastro-doenca',
  templateUrl: './cadastro-doenca.component.html',
  styleUrls: ['./cadastro-doenca.component.scss']
})
export class CadastroDoencaComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Doença';
  public doenca = {} as Doenca;

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
      cadastradoPor: [null, Validators.required]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_DOENCA;
    let doenca = new Doenca(
      this.formulario.value.nome,
      this.formulario.value.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, doenca).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );

    console.log("Doenca:", this.formulario.value);  }

}
