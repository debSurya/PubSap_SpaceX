import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { LaunchDetailsService } from 'src/app/services/launch-details.service';
import { SpaceXListComponent } from './space-x-list.component';

describe('SpaceXListComponent', () => {
  let component: SpaceXListComponent;
  let fixture: ComponentFixture<SpaceXListComponent>;
  const routeSubject = new BehaviorSubject({
    get: (param: string) => param === 'year' ? 'year' : null
  }),
    launchDetailsAPISubject = new BehaviorSubject([{
      mission_name: '',
      flight_number: 1,
      launch_year: 2000,
      launch_success: 2000,
      launch_landing: 2000,
      links: { mission_patch: '' },
      rocket: {
        first_stage: {
          cores: [{
            land_success: true
          }]
        }
      }
    }]),
    activatedRouteStub = {
      paramMap: routeSubject.asObservable()
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SpaceXListComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: activatedRouteStub
      }, {
        provide: LaunchDetailsService,
        useValue: {
          getListofLaunchDetails: () => launchDetailsAPISubject.asObservable()
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should formulate url and call API', () => {
    spyOn(component, 'getListOfDetailsFromAPI');
    component.ngOnInit();
    expect(component.getListOfDetailsFromAPI).toHaveBeenCalledOnceWith('&launch_year=year');
  });

  it('should get list of launch details', () => {
    expect(component.spaceXSearchResults.length).toBe(1);
  });
});
