import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-space-x-filters',
  templateUrl: './space-x-filters.component.html',
  styleUrls: ['./space-x-filters.component.scss']
})
export class SpaceXFiltersComponent implements OnInit {

  constructor(private router: Router) { }

  launchYears: number[] = [];
  filterState: {
    year: number | null,
    launchState: boolean | null,
    landingState: boolean | null
  } = {
      year: null,
      launchState: null,
      landingState: null
    };

  ngOnInit(): void {
    this.router.navigate(['search']);
    for (let year = 2006; year <= (new Date()).getFullYear(); year++) {
      this.launchYears.push(year);
    }
  }

  filterLaunchesLandingsByYear(year: number) {
    if (this.filterState.year !== year) {
      this.filterState.year = year;
    } else {
      this.filterState.year = null;
    }
    this.formulateRouteUrl();
  }

  filterLaunches(val: boolean) {
    if (this.filterState.launchState !== val) {
      this.filterState.launchState = val;
    } else {
      this.filterState.launchState = null;
    }
    this.formulateRouteUrl();
  }

  filterLandings(val: boolean) {
    if (this.filterState.landingState !== val) {
      this.filterState.landingState = val;
    } else {
      this.filterState.landingState = null;
    }
    this.formulateRouteUrl();
  }

  private formulateRouteUrl() {
    let url = 'search';
    if (!!this.filterState.year) {
      url += '/by_year/' + this.filterState.year;
    }
    if (this.filterState.launchState !== null) {
      url += '/by_launch/' + this.filterState.launchState;
    }
    if (this.filterState.landingState !== null) {
      url += '/by_landing/' + this.filterState.landingState;
    }
    this.router.navigate([url]);
  }

}
