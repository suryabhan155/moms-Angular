import { TestBed } from '@angular/core/testing';

import { ClinicManagementService } from './clinic-management.service';

describe('ClinicManagementService', () => {
  let service: ClinicManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
