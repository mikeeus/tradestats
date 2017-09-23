import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';

import { AppEffects } from './app';

@NgModule({
  imports: [
    EffectsModule.forFeature([
      AppEffects,
    ])
  ]
})
export class AppEffectsModule { }
