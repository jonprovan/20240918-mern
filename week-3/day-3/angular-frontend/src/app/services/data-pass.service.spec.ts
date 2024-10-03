import { TestBed } from '@angular/core/testing';

import { DataPassService } from './data-pass.service';

describe('DataPassService', () => {
  let service: DataPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
