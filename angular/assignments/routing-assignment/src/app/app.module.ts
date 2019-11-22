import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ChartComponent } from './charts/chart/chart.component';
import { ChartEditComponent } from './charts/chart-edit/chart-edit.component';
import { ChartsService } from './charts/charts.service';
import { ChartResolver } from './charts/chart/chart-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartsComponent,
    UsersComponent,
    UserComponent,
    ChartComponent,
    ChartEditComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [ChartsService, ChartResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
