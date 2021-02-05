import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXListComponent } from './space-x-home/space-x-list/space-x-list.component';

const routes: Routes = [{
  path: 'launches_landings/by_year/:year',
  component: SpaceXListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
