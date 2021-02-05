import { TestBed } from '@angular/core/testing';

import { LaunchDetailsService } from './launch-details.service';

describe('LaunchDetailsService', () => {
  let service: LaunchDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
