import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIndicacaoComponent } from './cadastro-indicacao.component';

describe('CadastroIndicacaoComponent', () => {
  let component: CadastroIndicacaoComponent;
  let fixture: ComponentFixture<CadastroIndicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroIndicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroIndicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
