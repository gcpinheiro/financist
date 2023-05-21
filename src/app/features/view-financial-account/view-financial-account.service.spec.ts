import { TestBed } from '@angular/core/testing';

import { ViewFinancialAccountService } from './view-financial-account.service';

describe('ViewFinancialAccountService', () => {
  let service: ViewFinancialAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewFinancialAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
