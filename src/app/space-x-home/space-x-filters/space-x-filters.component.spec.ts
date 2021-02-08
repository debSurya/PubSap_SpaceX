import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { SpaceXFiltersComponent } from './space-x-filters.component';

describe('SpaceXFiltersComponent', () => {
  let component: SpaceXFiltersComponent,
    fixture: ComponentFixture<SpaceXFiltersComponent>,
    location: Location,
    router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [SpaceXFiltersComponent]
    })
      .compileComponents();

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate launch year filters', () => {
    expect(component.launchYears.length).not.toBe(0);
  });

  it('should set year filter', () => {
    component.filterLaunchesLandingsByYear(2020);
    expect(component.filterState.year).toBe(2020);
  });

  it('should set launches filter', () => {
    component.filterLaunches(true);
    expect(component.filterState.launchState).toBe(true);
  });

  it('should set landings filter', () => {
    component.filterLandings(true);
    expect(component.filterState.landingState).toBe(true);
  });

  it('should formulate url for search results', () => {
    spyOn(router, 'navigate').and.stub();
    component.filterLaunchesLandingsByYear(2015);
    component.filterLandings(true);
    component.filterLaunches(true);
    expect(router.navigate).toHaveBeenCalledWith(['search/by_year/2015/by_launch/true/by_landing/true']);
  });
});
