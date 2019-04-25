import { Component, OnInit } from '@angular/core';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { Remedio } from '../../../models/remedio';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quantidade } from '../../../models/quantidade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-remedio',
  templateUrl: './cadastro-remedio.component.html',
  styleUrls: ['./cadastro-remedio.component.scss']
})
export class CadastroRemedioComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Remédio';
  public remedio = {} as Remedio;
  public quantidades = [] as Quantidade[];

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
      fabricante: [""],
      cadastradoPor: ["", Validators.required],
      componentes: this.buildComponentes()
    });
  }

  buildComponentes() {
    const values = this.quantidades.map(v => new FormGroup({
      nome: new FormControl(v.nome),
      unidade: new FormControl(v.unidade),
      valor: new FormControl(v.valor)}));
    return this.formBuilder.array(values);
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_REMEDIO;
    let remedio = new Remedio(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.fabricante,
      this.formulario.value.cadastradoPor,
      this.formulario.value.componentes
    );

    this.http.post(url, remedio).subscribe(result => {
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

  get componentes(): FormArray { return this.formulario.get('componentes') as FormArray; }

  addComponente() {
    this.componentes.push(new FormGroup({
      nome: new FormControl("", Validators.required),
      unidade: new FormControl("", Validators.required),
      valor: new FormControl("", Validators.required)}));
  }

  removeComponente(i: number) {
    this.componentes.removeAt(i);
  }

}
