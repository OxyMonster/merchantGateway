import { TestBed } from '@angular/core/testing';

import { BankRedirectServiceService } from './bank-redirect-service.service';

describe('BankRedirectServiceService', () => {
  let service: BankRedirectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankRedirectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
