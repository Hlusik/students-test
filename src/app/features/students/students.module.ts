import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import {StudentsListComponent} from './students-list/students-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentsRoutingModule} from './students-routing.module';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { studentsFeatureKey, studentsReducer } from './store/students.reducer';
import { StudentsEffects } from './store/students.effects';


@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    StudentsRoutingModule,
    StoreModule.forFeature(studentsFeatureKey, studentsReducer),
    EffectsModule.forFeature([StudentsEffects])
  ],
  exports: [StudentsListComponent]
})
export class StudentsModule {
}
