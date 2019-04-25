import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return ErrorMsgComponent.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config = {
      'required': `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      'pattern': 'Campo inválido'
    };

    return config[validatorName];
  }

}
