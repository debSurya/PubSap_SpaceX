import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SpaceXFiltersComponent } from './space-x-home/space-x-filters/space-x-filters.component';
import { SpaceXHomeComponent } from './space-x-home/space-x-home.component';

describe('AppComponent', () => {

  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SpaceXHomeComponent,
        FooterComponent,
        SpaceXFiltersComponent
      ],
    }).compileComponents();

    location = TestBed.inject(Location);
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SpaceXApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SpaceXApp');
  });

  it(`should route to ''`, () => {
    expect(location.path()).toBe('');
  });
});
