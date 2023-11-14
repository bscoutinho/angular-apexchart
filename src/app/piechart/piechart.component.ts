import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexDataLabels, ApexNonAxisChartSeries, ApexChart, ApexLegend } from "ng-apexcharts";

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  chartSeries: ApexNonAxisChartSeries;
  chartDetails: ApexChart;
  chartDataLabels: ApexDataLabels;
  chartLegends: ApexLegend;
  chartLabels: string[];

  constructor() { }

  ngOnInit(): void {
    this.chartSeries = [4000, 2000];
    this.chartDetails = {
      type: 'pie',
      toolbar: {
        show: false
      },
    };
    this.chartLabels = ['In Motion', 'Idle'];
    this.chartDataLabels = {
      enabled: false,
    }
    this.chartLegends = {
      show: false
    }
  }

}