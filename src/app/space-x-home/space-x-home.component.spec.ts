import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

import { SpaceXFiltersComponent } from './space-x-filters/space-x-filters.component';
import { SpaceXHomeComponent } from './space-x-home.component';

describe('SpaceXHomeComponent', () => {
  let component: SpaceXHomeComponent;
  let fixture: ComponentFixture<SpaceXHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        SpaceXHomeComponent,
        SpaceXFiltersComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
