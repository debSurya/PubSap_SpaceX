import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXFiltersComponent } from './space-x-filters.component';

describe('SpaceXFiltersComponent', () => {
  let component: SpaceXFiltersComponent;
  let fixture: ComponentFixture<SpaceXFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
