import { Component, OnInit } from '@angular/core';
import { Doenca } from '../../../models/doenca';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { FormBuilder, Validators, AsyncValidatorFn, FormGroup, ValidationErrors, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Url } from '../../../models/url.enum';
import { VerificaNomeService } from '../../services/verifica-nome/verifica-nome.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Sintoma } from '../../../models/sintoma';
import { SintomaDoenca } from '../../../models/sintomaDoenca';

@Component({
  selector: 'app-cadastro-doenca',
  templateUrl: './cadastro-doenca.component.html',
  styleUrls: ['./cadastro-doenca.component.scss']
})
export class CadastroDoencaComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Doença';
  public doenca = {} as Doenca;
  public sintomaDoenca = [] as SintomaDoenca[];
  public sintomasBD = [] as Sintoma[];
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
      }, { asyncValidator: this.nomeComplemento.bind(this) }
    ),
      descricao: [""],
      cadastradoPor: ["", Validators.required],
      sintomas: this.buildSintomas()
    });

    let url = Url.URL_BASE + Url.TODOS_SINTOMAS;
    this.http.get(url).subscribe(result => {
        let resultList = result as any[];
        this.sintomasBD = resultList.map(v => new Sintoma(
          v.nome,
          v.complemento,
          v.descricao,
          v.cadastradoPor
        ));
        console.log(this.sintomasBD);
      }
    );
  }

  buildSintomas() {
    const values = this.sintomaDoenca.map(v => new FormGroup({
      nome: new FormControl(v.nome)}));
    return this.formBuilder.array(values);
  }

  submit() {
    let url = Url.URL_BASE + Url.CADASTRO_DOENCA;
    let doenca = new Doenca(
      this.formulario.value.nomeCompleto.nome,
      this.formulario.value.nomeCompleto.complemento,
      this.formulario.value.descricao,
      this.formulario.value.cadastradoPor
    );

    this.success = false;
    this.http.post(url, doenca).subscribe(result => {
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
  
    return this.verificaNomeService.verificarNomeSituacao(nome.value, complemento.value)
      .pipe(map(nomeExiste => nomeExiste ? { nomeInvalido: true } : null));
  };

  get sintomas(): FormArray { return this.formulario.get('sintomas') as FormArray; }

  addSintoma() {
    this.sintomas.push(new FormGroup({
      nome: new FormControl("", Validators.required)}));
  }

  removeSintoma(i: number) {
    this.sintomas.removeAt(i);
  }

  suggestions: string[] = [];
  nomesSintomas: string[] = [];
  sintomaFocus = false;

  suggest(i: number) {
    this.nomesSintomas = this.sintomasBD.map(c => c.nome + this.nullToBlank(c.complemento));
    this.suggestions = this.nomesSintomas
      .filter(c => c.startsWith(this.formulario.get('sintomas').value[i].nome))
      .slice(0, 5);
  }

  nullToBlank(s: String) {
    if (s == null) {
      return "";
    }
    return " " + s;
  }

  fillTextbox(i, string) {
    (<FormArray>this.formulario.get('sintomas')).at(i).get('nome').setValue(string);
    this.suggestions = [];
  }

  onFocus() {
    this.sintomaFocus = true;
  }

  onBlur() {
    this.sintomaFocus = false;
  }

  focus() {
    return this.sintomaFocus && (this.suggestions.length > 0);
  }

}
