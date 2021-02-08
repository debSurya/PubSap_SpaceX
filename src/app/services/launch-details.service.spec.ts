import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LaunchDetailsService } from './launch-details.service';

describe('LaunchDetailsService', () => {
  let service: LaunchDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        LaunchDetailsService
      ]
    });
    service = TestBed.inject(LaunchDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the space x results from API', () => {
    service.getListofLaunchDetails('').subscribe((data) => {
      expect(data.length).not.toBe(0);
    });
  });
});
