import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  @Input() status2: string;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          console.log(this.control.errors);
          return ErrorMsgComponent.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'nomeInvalido': `${fieldName} já está em uso. Tente adicionar ou alterar o complemento.`,
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
    if (this.control.get('nome') === null) return false;
    else return true;
  }

  bttnAlterar() {
    this.router.navigate([`edita-comportamento/${this.control.get('nome').value}${this.control.get('complemento').value || ''}`]);
  }

}
