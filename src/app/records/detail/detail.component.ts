import { Component, OnInit } from '@angular/core';

import { Hscode } from '../../models';

import * as storeRoot from '../../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ets-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  record: Observable<{ data: Hscode, loading: boolean }>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.record = this.store.select(storeRoot.getRecord);
  }

}
