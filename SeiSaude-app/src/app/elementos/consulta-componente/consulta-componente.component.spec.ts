import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaComponenteComponent } from './consulta-componente.component';

describe('ConsultaComponenteComponent', () => {
  let component: ConsultaComponenteComponent;
  let fixture: ComponentFixture<ConsultaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
