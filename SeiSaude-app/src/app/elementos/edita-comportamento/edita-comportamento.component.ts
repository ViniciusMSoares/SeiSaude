import { Component, OnInit } from '@angular/core';
import { Comportamento } from '../../../models/comportamento';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, FormControl, ValidatorFn, FormGroup, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edita-comportamento',
  templateUrl: './edita-comportamento.component.html',
  styleUrls: ['./edita-comportamento.component.scss']
})
export class EditaComportamentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Alteração de Comportamento';
  public comportamento = {} as Comportamento;
  private comportamentos = [] as Comportamento[];
  public success: boolean;
  public nomeIndisponivel: boolean;
  public carregado = false;

  constructor(
    private route: ActivatedRoute,
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
        nome: ['', Validators.required],
        complemento: ['']
      }, { asyncValidator: this.nomeComplemento.bind(this) }),
      descricao: [''],
      cadastradoPor: ['', Validators.required]
    });

    this.route.params.subscribe(
      (params: any) => {
        this.carregaElemento(params.nome).subscribe(result => {
          this.comportamento = result as Comportamento;
          console.log(this.comportamento);

          this.carregado = this.comportamento != null;

          this.formulario.setValue({
            nomeCompleto: {
              nome: this.comportamento.nome,
              complemento: this.comportamento.complemento
            },
            descricao: this.comportamento.descricao,
            cadastradoPor: this.comportamento.cadastradoPor
          });
        });

      }
    );
  }

  carregaElemento(nome) {
    let url = Url.URL_BASE + Url.ELEMENTO;

    const options = nome ?
    { params: new HttpParams().set('nome', nome) } : {};

    return this.http.get(url, options);
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_COMPORTAMENTO;
    let comportamento = new Comportamento(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.http.put(url, comportamento).subscribe(result => {
      console.log(result);
      this.success = true;
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
  
    return this.verificaNomeService.verificarNome(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
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

}
