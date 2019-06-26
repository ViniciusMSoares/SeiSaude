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
import { Router } from '@angular/router';
import { Componente } from '../../../models/componente';
import { ValorNutricional } from '../../../models/valorNutricional';

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
  public componentesBD = [] as Componente[];
  public valNutriBD = [] as ValorNutricional[];
  public success: boolean;

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
      componentes: this.buildComponentes(),
      valNutricionais: this.buildValNutricionais()
    });

    let url = Url.URL_BASE + Url.TODOS_COMPONENTES;
    this.http.get(url).subscribe(result => {
        let resultList = result as any[];
        this.componentesBD = resultList.map(v => new Componente(
          v.nome,
          v.complemento
        ));
        console.log(this.componentesBD);
      }
    );

    let urlVal = Url.URL_BASE + Url.TODOS_VALNUTRI;
    this.http.get(urlVal).subscribe(result => {
        let resultList = result as any[];
        this.valNutriBD = resultList.map(v => new ValorNutricional(
          v.nome
        ));
        console.log(this.valNutriBD);
      }
    );
  }

  buildComponentes() {
    const values = this.quantidades.map(v => new FormGroup({
      nome: new FormControl(v.nome, Validators.required),
      unidade: new FormControl(v.unidade, Validators.required),
      valor: new FormControl(v.valor, Validators.required)}));
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

    this.success = false;
    this.http.post(url, alimento).subscribe(result => {
      console.log(result);
      this.success = true;
      this.formulario.reset();
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

  suggestions: string[] = [];
  nomesComponentes: string[] = [];
  componenteFocus = false;

  suggest(i: number) {
    this.nomesComponentes = this.componentesBD.map(c => c.nome + this.nullToBlank(c.complemento));
    this.suggestions = this.nomesComponentes
      .filter(c => c.startsWith(this.formulario.get('componentes').value[i].nome))
      .slice(0, 5);
  }

  nullToBlank(s: String) {
    if (s == null) {
      return "";
    }
    return " " + s;
  }

  fillTextbox(i, string) {
    (<FormArray>this.formulario.get('componentes')).at(i).get('nome').setValue(string);
    this.suggestions = [];
  }

  onFocus() {
    this.componenteFocus = true;
  }

  onBlur() {
    this.componenteFocus = false;
  }

  focus() {
    return this.componenteFocus && (this.suggestions.length > 0);
  }

  suggestionsVal: string[] = [];
  nomesValores: string[] = [];
  valFocus = false;

  suggestVal(i: number) {
    this.nomesValores = this.valNutriBD.map(v => v.nome);
    this.suggestionsVal = this.nomesValores
      .filter(c => c.startsWith(this.formulario.get('valNutricionais').value[i].nome))
      .slice(0, 5);
  }

  fillTextboxVal(i, string) {
    (<FormArray>this.formulario.get('valNutricionais')).at(i).get('nome').setValue(string);
    this.suggestionsVal = [];
  }

  onFocusVal() {
    this.valFocus = true;
  }

  onBlurVal() {
    this.valFocus = false;
  }

  focusVal() {
    return this.valFocus && (this.suggestionsVal.length > 0);
  }

}
