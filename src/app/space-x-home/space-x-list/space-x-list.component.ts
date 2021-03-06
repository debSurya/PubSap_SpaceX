import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
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
    private launchDetailsService: LaunchDetailsService,
    private ngxLoaderService: NgxUiLoaderService
  ) { }

  private routeParamSub: Subscription;
  private getDetailsSub: Subscription;
  spaceXSearchResults: SpaceXDetails[] = [];
  landingSuccessFlag = false;

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
    this.ngxLoaderService.start();
    this.getDetailsSub = this.launchDetailsService.getListofLaunchDetails(url)
      .subscribe((data: SpaceXDetails[]) => {
        this.spaceXSearchResults = data;
        if (!!this.getDetailsSub) {
          this.getDetailsSub.unsubscribe();
        }
        this.ngxLoaderService.stopAll();
      });
  }

  checkValAvailability(val: boolean | null): string | boolean {
    return val === null ? 'NA' : val;
  }

  resultsTrackByFn(index: number, result: SpaceXDetails) {
    return result.mission_id;
  }

  ngOnDestroy() {
    this.routeParamSub.unsubscribe();
  }
}
