import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { UsersComponent } from './users/users.component';
import { ChartComponent } from './charts/chart/chart.component';
import { ChartEditComponent } from './charts/chart-edit/chart-edit.component';
import { ChartResolver } from './charts/chart/chart-resolver.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'charts', component: ChartsComponent, 
        children: [
            {path: ':id', component: ChartComponent, resolve: {chart: ChartResolver}},
            {path: ':id/edit', component: ChartEditComponent}
        ]},
    {path: 'users', component: UsersComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}