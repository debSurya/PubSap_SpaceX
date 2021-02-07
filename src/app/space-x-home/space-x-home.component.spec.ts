import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXHomeComponent } from './space-x-home.component';

fdescribe('SpaceXHomeComponent', () => {
  let component: SpaceXHomeComponent;
  let fixture: ComponentFixture<SpaceXHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXHomeComponent ]
    })
    .compileComponents();
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
