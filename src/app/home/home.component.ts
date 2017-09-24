import { Component, OnInit } from '@angular/core';

import { chartOptions, chartColors, YEARS } from '../shared';

import * as storeRoot from '../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ets-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  graph: Observable<{data: any, loading: boolean}>;

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  autoScale = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';

  public chartType = 'bar';
  public chartLegend = true;
  public chartOptions = chartOptions;
  public chartColors = chartColors;
  public chartLabels = YEARS;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.graph = this.store.select(storeRoot.getHomeGraph)
  }

}
