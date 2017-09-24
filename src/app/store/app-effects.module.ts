import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app';
import { HomeEffects } from './home';
import { RecordsEffects } from './records';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AppEffects,
      HomeEffects,
      RecordsEffects,
    ])
  ]
})
export class AppEffectsModule { }
