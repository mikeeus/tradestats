import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ObservableMedia } from '@angular/flex-layout';

import { HscodeService } from '../../../_services';
import { Hscode } from '../../../models';
import { COUNTRIES } from '../../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ets-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries = COUNTRIES;
  form: FormGroup;
  filtered: Observable<string[]>;
  results: Observable<Hscode[]>;

  constructor(
    private fb: FormBuilder,
    private hscodeService: HscodeService,
    public media: ObservableMedia
  ) {
    this.form = this.fb.group({
      country: [],
      records: []
    })
    this.results = this.form.controls.records.valueChanges
      .startWith(null)
      .filter(term => term && term.length > 2)
      .switchMap(term => this.hscodeService.search(term))
      .do(res => console.log('res: ', res));

    this.filtered = this.form.controls.country.valueChanges
      .startWith(null)
      .map(term => term ? this.filterCountries(term) : this.countries.slice()
      )
      .do(res => console.log('res: ', res));
  }

  filterCountries(name: string) {
    return this.countries.filter(country =>
      country.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit() {
  }

  selectCountry(country: string) {
    console.log(`${country} selected.`);
  }

  displayFn(drug) {
    console.log('displayfn => ', drug);
    return drug == null ? drug : drug;
  }

}
