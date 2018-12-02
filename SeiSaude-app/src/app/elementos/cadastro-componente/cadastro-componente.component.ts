import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Componente } from '../../../models/componente';

@Component({
  selector: 'app-cadastro-componente',
  templateUrl: './cadastro-componente.component.html',
  styleUrls: ['./cadastro-componente.component.scss']
})
export class CadastroComponenteComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Componente';
  public componente = {} as Componente;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      complemento: [null]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_COMPONENTE;
    let componente = new Componente(
      this.formulario.value.nome,
      this.formulario.value.complemento
    );

    this.http.post(url, componente).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );

    console.log("Componente:", this.formulario.value);
  }

}
