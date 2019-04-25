import { Component, OnInit } from '@angular/core';
import { Doenca } from '../../../models/doenca';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    let url = Url.URL_BASE + Url.CADASTRO_DOENCA;
    let doenca = new Doenca(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.post(url, doenca).subscribe(result => {
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
