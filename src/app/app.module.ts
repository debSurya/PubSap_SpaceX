import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXHomeComponent } from './space-x-home/space-x-home.component';
import { SpaceXFiltersComponent } from './space-x-home/space-x-filters/space-x-filters.component';
import { SpaceXListComponent } from './space-x-home/space-x-list/space-x-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXHomeComponent,
    SpaceXFiltersComponent,
    SpaceXListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
