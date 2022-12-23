import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
    declarations: [StudentsComponent, StudentDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        StudentsRoutingModule,
    ],
    exports: [StudentsComponent],
})
export class StudentsModule { }
