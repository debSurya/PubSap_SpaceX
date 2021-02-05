import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXListComponent } from './space-x-home/space-x-list/space-x-list.component';

const routes: Routes = [{
  path: 'search',
  component: SpaceXListComponent
}, {
  path: 'search/by_year/:year',
  component: SpaceXListComponent
}, {
  path: 'search/by_launch/:launchflag',
  component: SpaceXListComponent
}, {
  path: 'search/by_landing/:landflag',
  component: SpaceXListComponent
}, {
  path: 'search/by_year/:year/by_launch/:launchflag',
  component: SpaceXListComponent
}, {
  path: 'search/by_year/:year/by_landing/:landflag',
  component: SpaceXListComponent
}, {
  path: 'search/by_launch/:launchflag/by_landing/:landflag',
  component: SpaceXListComponent
}, {
  path: 'search/by_year/:year/by_launch/:launchflag/by_landing/:landflag',
  component: SpaceXListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
