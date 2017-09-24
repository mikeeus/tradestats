import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HSCODES_URL } from '../config';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HscodeService {

  constructor(
    private http: HttpClient
  ) { }

  search(term: string): Observable<any> {
    return this.http.get(`${HSCODES_URL}/term`)
  }
}
