import { Component, OnInit } from '@angular/core';
import { Alimento } from '../../../models/alimento';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { Url } from '../../../models/url.enum';
import { Observable } from 'rxjs';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { map } from 'rxjs/operators';
import { Quantidade } from '../../../models/quantidade';
import { Valor } from '../../../models/valor';

@Component({
  selector: 'app-cadastro-alimento',
  templateUrl: './cadastro-alimento.component.html',
  styleUrls: ['./cadastro-alimento.component.scss']
})
export class CadastroAlimentoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Alimento';
  public alimento = {} as Alimento;
  public quantidades = [] as Quantidade[];
  public valores = [] as Valor[];

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
      cadastradoPor: ["", Validators.required],
      componentes: this.buildComponentes(),
      valNutricionais: this.buildValNutricionais()
    });
  }

  buildComponentes() {
    const values = this.quantidades.map(v => new FormGroup({
      nome: new FormControl(v.nome),
      unidade: new FormControl(v.unidade),
      valor: new FormControl(v.valor)}));
    return this.formBuilder.array(values);
  }

  buildValNutricionais() {
    const values = this.valores.map(v => new FormGroup({
      nome: new FormControl("", Validators.required),
      quantidade: new FormControl("", Validators.required),
      unidade: new FormControl("", Validators.required),
      valorDiario: new FormControl("", Validators.required)}));
    return this.formBuilder.array(values);
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_ALIMENTO;
    let alimento = new Alimento(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.fabricante,
      this.formulario.value.cadastradoPor,
      this.formulario.value.componentes,
      this.formulario.value.valNutricionais
    );

    this.http.post(url, alimento).subscribe(result => {
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

  get valNutricionais(): FormArray { return this.formulario.get('valNutricionais') as FormArray; }

  addValNutricional() {
    this.valNutricionais.push(new FormGroup({
      nome: new FormControl("", Validators.required),
      quantidade: new FormControl("", Validators.required),
      unidade: new FormControl("", Validators.required),
      valorDiario: new FormControl("", Validators.required)}));
  }

  removeValNutricional(i: number) {
    this.valNutricionais.removeAt(i);
  }

}
