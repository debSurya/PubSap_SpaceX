import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXHomeComponent } from './space-x-home/space-x-home.component';
import { SpaceXFiltersComponent } from './space-x-home/space-x-filters/space-x-filters.component';
import { SpaceXListComponent } from './space-x-home/space-x-list/space-x-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXHomeComponent,
    SpaceXFiltersComponent,
    SpaceXListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot({
      fgsType: SPINNER.threeStrings,
      fgsColor: '#a5a5e6',
      fgsSize: 100,
      hasProgressBar: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
