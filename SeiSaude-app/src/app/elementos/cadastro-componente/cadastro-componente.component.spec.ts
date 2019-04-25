import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponenteComponent } from './cadastro-componente.component';

describe('CadastroComponenteComponent', () => {
  let component: CadastroComponenteComponent;
  let fixture: ComponentFixture<CadastroComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
