import { Component, OnInit } from '@angular/core';
import { Indicacao } from '../../../models/indicacao';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBaseComponent } from '../../form-base/form-base.component';
import { Url } from '../../../models/url.enum';
import { Elemento } from '../../../models/elemento';
import { Situacao } from '../../../models/situacao';

@Component({
  selector: 'app-cadastro-indicacao',
  templateUrl: './cadastro-indicacao.component.html',
  styleUrls: ['./cadastro-indicacao.component.scss']
})
export class CadastroIndicacaoComponent extends FormBaseComponent implements OnInit {

  public title = 'Cadastro de Indicação';
  public indicacao = {} as Indicacao;
  public elementosBD = [] as Elemento[];
  public situacoesBD = [] as Situacao[];
  public success: boolean;
  public elementoID: number;
  public situacaoID: number;
  public tipoPessoaID: number;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    router: Router
  ) {
    super(router);
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      dosagem: ["", Validators.required],
      efeito: ["", Validators.required],
      tipo: ["", Validators.required],
      unidade: ["", Validators.required],
      elemento: ["", Validators.required],
      situacao: ["", Validators.required],
      tipoPessoa: ["", Validators.required],
    });

    let url = Url.URL_BASE + Url.TODOS_ELEMENTOS;
    this.http.get(url).subscribe(result => {
        let resultList = result as any[];
        this.elementosBD = resultList.map(v => new Elemento(
          v.nome,
          v.complemento,
          v.descricao,
          v.cadastroPor,
          v.id
        ));
        console.log(this.elementosBD);
      }
    );

    let urlS = Url.URL_BASE + Url.TODAS_SITUACOES;
    this.http.get(urlS).subscribe(result => {
        let resultList = result as any[];
        this.situacoesBD = resultList.map(v => new Situacao(
          v.nome,
          v.complemento,
          v.descricao,
          v.cadastroPor,
          v.id
        ));
        console.log(this.situacoesBD);
      }
    );
  }

  submit() {
    let url = Url.URL_BASE + Url.INDICACAO;
    let indicacao = new Indicacao(
      this.formulario.value.dosagem,
      this.formulario.value.efeito,
      this.formulario.value.tipo,
      this.formulario.value.unidade,
      this.elementoID,
      this.situacaoID,
      this.tipoPessoaID
    );

    this.success = false;
    this.http.post(url, indicacao).subscribe(result => {
      console.log(result);
      this.success = true;
      this.formulario.reset();
      },
      (error: any) => console.log(error)
    );
  }

  suggestions = [] as any[];
  nomesElementos = [] as any[];
  elementoFocus = false;

  suggest() {
    this.nomesElementos = this.elementosBD.map(c => [c.nome + this.nullToBlank(c.complemento), c.id]);
    this.suggestions = (this.nomesElementos
      .filter(c => c["0"].startsWith(this.formulario.value.elemento))
      .slice(0, 5));
  }

  nullToBlank(s: String) {
    if (s == null) {
      return "";
    }
    return " " + s;
  }

  fillTextbox(s) {
    this.formulario.get("elemento").setValue(s[0]);
    this.suggestions = [];
    this.elementoID = s[1];
  }

  onFocus() {
    this.elementoFocus = true;
  }

  onBlur() {
    this.elementoFocus = false;
  }

  focus() {
    return this.elementoFocus && (this.suggestions.length > 0);
  }

  suggestionsSit: string[] = [];
  nomesSituacoes: string[] = [];
  situacaoFocus = false;

  suggestSit() {
    this.nomesSituacoes = this.situacoesBD.map(v => v.nome);
    this.suggestionsSit = this.nomesSituacoes
      .filter(c => c.startsWith(this.formulario.value.situacao))
      .slice(0, 5);
  }

  fillTextboxSit(string) {
    this.formulario.get("situacao").setValue(string);
    this.suggestionsSit = [];
  }

  onFocusSit() {
    this.situacaoFocus = true;
  }

  onBlurSit() {
    this.situacaoFocus = false;
  }

  focusSit() {
    return this.situacaoFocus && (this.suggestionsSit.length > 0);
  }
}
