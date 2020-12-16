import { TestBed } from '@angular/core/testing';

import { UtileSericeService } from './utile-serice.service';

describe('UtileSericeService', () => {
  let service: UtileSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtileSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
