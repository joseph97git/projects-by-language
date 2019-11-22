import { Component, OnInit } from '@angular/core';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  private charts: {id: number, name: string, status: string}[] = [];

  constructor(private chartsService: ChartsService) {}

  ngOnInit() {
    this.charts = this.chartsService.getCharts();
  }
}
