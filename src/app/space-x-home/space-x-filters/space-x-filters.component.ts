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

  ngOnInit(): void {
    for (let year = 2006; year <= (new Date()).getFullYear(); year++) {
      this.launchYears.push(year);
    }
  }

  filterLaunchesLandingsByYear(year: number) {
    this.router.navigateByUrl('launches_landings/by_year/' + year);
  }

  filterLaunchesLandings() { }

}
