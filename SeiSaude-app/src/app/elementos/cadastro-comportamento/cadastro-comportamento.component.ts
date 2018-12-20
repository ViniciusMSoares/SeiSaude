import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, FormControl, ValidatorFn, FormGroup, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-comportamento',
  templateUrl: './cadastro-comportamento.component.html',
  styleUrls: ['./cadastro-comportamento.component.scss']
})
export class CadastroComportamentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Comportamento';
  public comportamento = {} as Comportamento;
  public success: boolean;
  public nomeIndisponivel: boolean;

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
      }, { asyncValidator: this.nomeComplemento.bind(this) }),
      descricao: [""],
      cadastradoPor: ["", Validators.required]
    });
    this.testaHTTP();
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_COMPORTAMENTO;
    let comportamento = new Comportamento(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, comportamento).subscribe(result => {
      console.log(result);
      this.success = true;
      },
      (error: any) => {
        console.log(error);
        this.nomeIndisponivel = true;
      }
    );
  }

  /*validarNome(formControl: FormControl) {
    return this.verificaNomeService.verificarNome(formControl.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  }*/

  nomeComplemento: AsyncValidatorFn = (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const nome = control.get('nome');
    const complemento = control.get('complemento');
  
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  };

  testaHTTP() {
    let url = Url.URL_BASE + Url.TODOS_ELEMENTOS;
    this.http.get(url).subscribe(result => {
        console.log(result);
      },
      (error: any) => alert('erro')
    );
  }

}
