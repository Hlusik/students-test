import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { studentsFeatureKey, studentsReducer } from '../students/store/students.reducer';
import { StudentsEffects } from '../students/store/students.effects';
import { StudentsStateFacade } from '../students/store/students.facade';
import { ChartModule } from '../../shared/chart/chart.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { MessageModule } from 'src/app/shared/message/message.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LoaderModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MessageModule,
    RouterModule,
    ChartModule,
    StoreModule.forFeature(studentsFeatureKey, studentsReducer),
    EffectsModule.forFeature([StudentsEffects])
  ],
  exports: [DashboardComponent],
  providers: [StudentsStateFacade],
})
export class DashboardModule { }
