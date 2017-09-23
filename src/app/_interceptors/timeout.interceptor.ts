import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/timeout';
// const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  defaultTimeout = 10000;

  constructor() {}
  // constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
    return next.handle(req).timeout(timeout);
  }
}

// Usage: To add a longer timeout add a 'timeout' header with string value:
// http.get(..., { headers: new HttpHeaders({ timeout: `${20000}` }) });
