import { AppPage } from './app.po';
import { element } from '@angular/core/src/render3';
import { CadastroComportamentoComponent } from 'src/app/elementos/cadastro-comportamento/cadastro-comportamento.component';
import { ErrorMsgComponent } from 'src/app/error-msg/error-msg.component';

describe('workspace-project App', () => {
  let page: AppPage;
  let comportamento: CadastroComportamentoComponent;
  let errorMsg: ErrorMsgComponent;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to SeiSaude-app!');
  });

  it('should focus on input when button is pressed', function() {
    let a = element.
  });
});
