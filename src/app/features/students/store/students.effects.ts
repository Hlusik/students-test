import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { StudentService } from 'src/app/services/student.service';
import  * as actions from './students.actions';

@Injectable()
export class StudentsEffects {
    getStudents$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.requestAllStudents),
            mergeMap(() => this.StudentsService.getStudents()
                .pipe(
                    map((students) => (actions.requestAllStudentsSuccess({students}))),
                    catchError((errorMessage) => of(actions.requestDeleteStudentFail (errorMessage.message)))
                )
            )
        )
    );

    getStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.requestSingleStudent),
            mergeMap((action: any) => this.StudentsService.getStudent(action.id)
                .pipe(
                    map((res: any) => (actions.requestSingleStudentSuccess(res))),
                    catchError((errorMessage) => of(actions.RequestSingleStudentFail (errorMessage.message)))
                )
            )
        )
    );

    deleteStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.requestDeleteStudent),
            mergeMap((action: any) => this.StudentsService.deleteStudent(action.id)
                .pipe(
                    map(() => (actions.requestAllStudents())),
                    catchError((errorMessage) => of(actions.requestDeleteStudentFail (errorMessage.message)))
                )
            )
        )
    );

    editStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.requestEditStudent),
            mergeMap((action:any) => this.StudentsService.updateStudent(action.Student)
                .pipe(
                    map(() => (actions.requestEditStudentSuccess())),
                    catchError((errorMessage) => of(actions.requestEditStudentFail(errorMessage.message)))
                )
            )
        )
    );

    createStudent$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.requestCreateStudent),
            mergeMap((action: any) => this.StudentsService.addStudent(action.Student)
                .pipe(
                    map(() => (actions.requestCreateStudentSuccess ())),
                    catchError((errorMessage) => of(actions.requestCreateStudentFail (errorMessage.message)))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private StudentsService: StudentService,
        private router: Router,
        private store: Store,
    ) { }
}
