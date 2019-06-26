import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroComportamentoComponent } from '../elementos/cadastro-comportamento/cadastro-comportamento.component';
@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  @ViewChild(CadastroComportamentoComponent) comportamento: CadastroComportamentoComponent;
  @Output() bttnError = new EventEmitter();

  @Input() status2: string;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          //console.log(propertyName);
          return ErrorMsgComponent.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'nomeInvalido': `${fieldName} já está em uso. Você deseja:`,
      'nomeComplementoInvalidos': `${fieldName} e complemento já estão em uso. Você deseja:`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'pattern': 'Campo inválido'
    };

    return config[validatorName];
  }

  get statusMessage() {
    if (this.control.status == 'PENDING') {
      return 'Avaliando nome...'
    }
    else if (this.control.status == 'VALID') {
      return 'Nome válido.'
    }

    return null;
  }

  get nomeInvalido() {
    if (this.control.errors["nomeInvalido"]) return "nome";
    else if (this.control.errors["nomeComplementoInvalidos"]) return "complemento";
    else return null;
  }

  bttnAlterar() {
    this.router.navigate([`edita-comportamento/${this.control.get('nome').value}${this.control.get('complemento').value || ''}`]);
  }


  bttnFocus(nameElement: String) {
    this.bttnError.emit(nameElement);
  }
}
