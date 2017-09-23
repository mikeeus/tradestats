import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError } from '@angular/router';

import { Options as NotificationsOptions} from 'angular2-notifications';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loading = false;
  notificationsOptions: NotificationsOptions = {
    position: ['bottom', 'left'],
    timeOut: 5000,
    lastOnBottom: true,
    showProgressBar: false,
    pauseOnHover: true,
    animate: 'scale'
  }

  private subs: Subscription[] = [];

  constructor(
    private router: Router,
    private store: Store<any>,
    private sanitizer: DomSanitizer,
    private iconRegistry: MdIconRegistry
    ) {  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    this.registerIcons();
  }

  /** Register svg icons for @angular/material md-icon. */
  registerIcons() {
    const icons = [];
    icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(icon.key,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/icon/${icon.filename}.svg`)
      );
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
        this.loading = true;
    }
    if (event instanceof NavigationEnd) {
        this.loading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
        this.loading = false;
    }
    if (event instanceof NavigationError) {
        this.loading = false;
    }
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe() );
  }
}
