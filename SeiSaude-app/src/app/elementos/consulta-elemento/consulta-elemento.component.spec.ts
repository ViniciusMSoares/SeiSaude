import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaElementoComponent } from './consulta-elemento.component';

describe('ConsultaElementoComponent', () => {
  let component: ConsultaElementoComponent;
  let fixture: ComponentFixture<ConsultaElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
