import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { COUNTRIES } from '../../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ets-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  countries = COUNTRIES;
  form: FormGroup;
  filtered: Observable<string[]>;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      country: []
    })
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
