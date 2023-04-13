import { TestBed } from '@angular/core/testing';

import { TableOptionsService } from './table-options.service';

describe('TableOptionsService', () => {
  let service: TableOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
