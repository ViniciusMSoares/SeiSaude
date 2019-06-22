import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, FormControl, ValidatorFn, FormGroup, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-cadastro-comportamento',
  templateUrl: './cadastro-comportamento.component.html',
  styleUrls: ['./cadastro-comportamento.component.scss']
})
export class CadastroComportamentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Comportamento';
  public comportamento = {} as Comportamento;
  private comportamentos = [] as Comportamento[];
  public success: boolean;
  public nomeIndisponivel: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private verificaNomeService: VerificaNomeService,
    router: Router
  ) {
    super(router);
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

    this.success = false;
    this.http.post(url, comportamento).subscribe(result => {
      console.log(result);
      this.success = true;
      this.formulario.reset();
      },
      (error: any) => {
        console.log(error);
        this.nomeIndisponivel = true;
      }
    );
  }

  nomeComplemento: AsyncValidatorFn = (control: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const nome = control.get('nome');
    const complemento = control.get('complemento');

    if (!complemento.value) {
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
    }
    else {
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeComplementoInvalidos: true } : null));
    }
  };

  testaHTTP() {
    let url = Url.URL_BASE + Url.TODOS_ELEMENTOS;
    this.http.get(url).subscribe(result => {
        let resultList = result as any[];
        //console.log(result);
        this.comportamentos = resultList.map(v => new Comportamento(
          v.name,
          v.complemento,
          v.descricao,
          v.cadastradoPor
        ));
        console.log(this.comportamentos);
      },
      (error: any) => alert('erro')
    );
  }

  get nameIsSelected() {
    let nome = $("#nome").is(":focus");
    let complemento = $("#complemento").is(":focus");

    return !nome && !complemento;
  }

  focusElement(elementName: String) {
    $('#' + elementName).trigger("focus");
  }
}
