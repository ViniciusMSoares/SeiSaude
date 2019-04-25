import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';

@NgModule({
  declarations: [
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorMsgComponent
  ]
})
export class FormBaseModule { }
