import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { SpaceXDetails } from '../app.component.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchDetailsService {

  constructor(private http: HttpClient) { }

  getLaunchDetailsByYear(year: number): Observable<SpaceXDetails[]> {
    return this.http.get<SpaceXDetails[]>(
      `${environment.launchDetailsAPIUrl}?limit=100&launch_success=true&land_success=true&launch_year=${year}`
    );
  }
}
