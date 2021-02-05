import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { SpaceXDetails } from 'src/app/app.component.model';
import { LaunchDetailsService } from 'src/app/services/launch-details.service';

@Component({
  selector: 'app-space-x-list',
  templateUrl: './space-x-list.component.html',
  styleUrls: ['./space-x-list.component.scss']
})
export class SpaceXListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private launchDetailsService: LaunchDetailsService
  ) { }

  private routeParamSub: Subscription;
  spaceXSearchResults: SpaceXDetails[] = [];

  ngOnInit(): void {
    this.routeParamSub = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.getLaunchDetails(paramMap.get('year'));
      });
  }

  private getLaunchDetails(year: string | null): void {
    if (!!year) {
      this.launchDetailsService.getLaunchDetailsByYear(parseInt(year))
        .subscribe((data: SpaceXDetails[]) => {
          console.log(data);
          this.spaceXSearchResults = data;
        });
    }
  }

  resultsTrackByFn(index: number, result: SpaceXDetails) {
    return result.mission_id;
  }
}
