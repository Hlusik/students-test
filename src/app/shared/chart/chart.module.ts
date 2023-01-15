import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentsStateFacade } from '../../features/students/store/students.facade';
import { StudentsEffects } from '../../features/students/store/students.effects';
import {
  studentsFeatureKey,
  studentsReducer,
} from '../../features/students/store/students.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule,
    StoreModule.forFeature(studentsFeatureKey, studentsReducer),
    EffectsModule.forFeature([StudentsEffects]),
  ],
  exports: [ChartComponent],
  providers: [StudentsStateFacade],
})
export class ChartModule {}
