import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {
        path: '',
        component: StudentsComponent,
    },
    {
        path: ':id',
        component: StudentDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentsRoutingModule { }