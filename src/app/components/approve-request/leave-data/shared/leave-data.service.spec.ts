import { TestBed, inject } from '@angular/core/testing';

import { LeaveDataService } from './leave-data.service';

describe('LeaveDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveDataService]
    });
  });

  it('should be created', inject([LeaveDataService], (service: LeaveDataService) => {
    expect(service).toBeTruthy();
  }));
});
