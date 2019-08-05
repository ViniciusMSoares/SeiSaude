import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaValorComponent } from './consulta-valor.component';

describe('ConsultaValorComponent', () => {
  let component: ConsultaValorComponent;
  let fixture: ComponentFixture<ConsultaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
