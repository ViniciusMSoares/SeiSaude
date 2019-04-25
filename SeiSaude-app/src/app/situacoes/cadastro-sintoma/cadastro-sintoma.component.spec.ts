import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSintomaComponent } from './cadastro-sintoma.component';

describe('CadastroSintomaComponent', () => {
  let component: CadastroSintomaComponent;
  let fixture: ComponentFixture<CadastroSintomaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSintomaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSintomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
