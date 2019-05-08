import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaComportamentoComponent } from './edita-comportamento.component';

describe('EditaComportamentoComponent', () => {
  let component: EditaComportamentoComponent;
  let fixture: ComponentFixture<EditaComportamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaComportamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaComportamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
