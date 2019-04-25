import { TestBed } from '@angular/core/testing';

import { VerificaNomeService } from './verifica-nome.service';

describe('VerificaNomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VerificaNomeService = TestBed.get(VerificaNomeService);
    expect(service).toBeTruthy();
  });
});
