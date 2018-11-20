import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComportamentoComponent } from './cadastro-comportamento.component';

describe('CadastroComportamentoComponent', () => {
  let component: CadastroComportamentoComponent;
  let fixture: ComponentFixture<CadastroComportamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComportamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComportamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
