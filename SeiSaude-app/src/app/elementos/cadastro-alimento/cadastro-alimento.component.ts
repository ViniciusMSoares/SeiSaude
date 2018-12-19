import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../../models/alimento';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { Url } from '../../../models/url.enum';
import { Observable } from 'rxjs';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { map } from 'rxjs/operators';

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
      fabricante: [""],
      cadastradoPor: ["", Validators.required]
    });
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_ALIMENTO;
    let alimento = new Alimento(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
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

  nomeComplemento: AsyncValidatorFn = (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const nome = control.get('nome');
    const complemento = control.get('complemento');
  
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  };

}
