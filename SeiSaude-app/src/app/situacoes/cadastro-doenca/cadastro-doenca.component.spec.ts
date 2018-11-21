import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDoencaComponent } from './cadastro-doenca.component';

describe('CadastroDoencaComponent', () => {
  let component: CadastroDoencaComponent;
  let fixture: ComponentFixture<CadastroDoencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDoencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDoencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
