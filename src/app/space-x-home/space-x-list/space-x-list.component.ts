import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { SpaceXDetails } from 'src/app/app.component.model';
import { LaunchDetailsService } from 'src/app/services/launch-details.service';

@Component({
  selector: 'app-space-x-list',
  templateUrl: './space-x-list.component.html',
  styleUrls: ['./space-x-list.component.scss']
})
export class SpaceXListComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private launchDetailsService: LaunchDetailsService
  ) { }

  private routeParamSub: Subscription;
  private getDetailsSub: Subscription;
  spaceXSearchResults: SpaceXDetails[] = [];

  ngOnInit(): void {
    let url = '', param;
    this.routeParamSub = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        param = paramMap.get('year');
        if (!!param) {
          url += '&launch_year=' + param;
        }
        param = paramMap.get('launchflag');
        if (!!param && JSON.parse(param.toLowerCase())) {
          url += '&launch_success=' + param;
        }
        param = paramMap.get('landflag');
        if (!!param && JSON.parse(param.toLowerCase())) {
          url += '&land_success=' + param;
        }
        this.getListOfDetailsFromAPI(url);
        url = '';
      });
  }

  getListOfDetailsFromAPI(url: string) {
    this.getDetailsSub = this.launchDetailsService.getListofLaunchDetails(url)
      .subscribe((data: SpaceXDetails[]) => {
        this.spaceXSearchResults = data;
        if (!!this.getDetailsSub) {
          this.getDetailsSub.unsubscribe();
        }
      });
  }

  resultsTrackByFn(index: number, result: SpaceXDetails) {
    return result.mission_id;
  }

  ngOnDestroy() {
    this.routeParamSub.unsubscribe();
  }
}
