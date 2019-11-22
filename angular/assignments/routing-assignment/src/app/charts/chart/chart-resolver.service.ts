import { Injectable } from '@angular/core';
import { ChartsService } from '../charts.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

interface Chart {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ChartResolver implements Resolve<Chart> {
    constructor(private chartsService: ChartsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        Observable<Chart> | Promise<Chart> | Chart {
        return this.chartsService.getChart(+route.params['id']);
    }
}