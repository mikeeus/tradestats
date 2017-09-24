import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hscode } from '../../models';
import { HSCODES_URL } from '../config';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HscodeService {

  constructor(
    private http: HttpClient
  ) { }

  search(term: string): Observable<Hscode[]> {
    return this.http.get<Hscode[]>(`${HSCODES_URL}/search/${term}`)
                    .map(r => r.map(h => new Hscode(h)))
  }
}
