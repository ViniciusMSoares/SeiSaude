import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSituacaoComponent } from './consulta-situacao.component';

describe('ConsultaSituacaoComponent', () => {
  let component: ConsultaSituacaoComponent;
  let fixture: ComponentFixture<ConsultaSituacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSituacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
