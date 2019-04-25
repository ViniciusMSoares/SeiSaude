import { Component, OnInit } from '@angular/core';
import { Sintoma } from '../../../models/sintoma';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';

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
    private http: HttpClient,
    private verificaNomeService: VerificaNomeService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeCompleto: this.formBuilder.group({
        nome: ["", Validators.required],
        complemento: [""]
      }, { asyncValidator: this.nomeComplemento.bind(this) }
    ),
      descricao: [""],
      cadastradoPor: ["", Validators.required]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_SINTOMA;
    let sintoma = new Sintoma(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, sintoma).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );
  }

  nomeComplemento: AsyncValidatorFn = (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const nome = control.get('nome');
    const complemento = control.get('complemento');
  
    return this.verificaNomeService.verificarNomeSituacao(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  };

}
