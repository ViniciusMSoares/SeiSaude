import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Componente } from '../../../models/componente';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
      }, //{ asyncValidator: this.nomeComplemento.bind(this) }
    ),
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_COMPONENTE;
    let componente = new Componente(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento
    );

    this.http.post(url, componente).subscribe(result => {
      console.log(result);
      },
      (error: any) => console.log(error)
    );
  }

  nomeComplemento: AsyncValidatorFn = (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const nome = control.get('nome');
    const complemento = control.get('complemento');
  
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  };

}
