import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { StudentService } from 'src/app/services/student.service';
import * as actions from './students.actions';

@Injectable()
export class StudentsEffects {
  getStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadAllStudents),
      mergeMap(() =>
        this.StudentsService.getStudents().pipe(
          map((students) => actions.loadAllStudentsSuccess({ students })),
          catchError((errorMessage) =>
            of(actions.loadAllStudentsFail(errorMessage.message))
          )
        )
      )
    )
  );

  getStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadSingleStudent),
      mergeMap((action: any) =>
        this.StudentsService.getStudent(action.id).pipe(
          map((singleStudent) => actions.loadSingleStudentSuccess({ singleStudent })),
          catchError((errorMessage) =>
            of(actions.loadSingleStudentFail(errorMessage.message))
          )
        )
      )
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteStudent),
      mergeMap((action: any) =>
        this.StudentsService.deleteStudent(action.id).pipe(
          map(() => actions.deleteStudentSuccess()),
          catchError((errorMessage) =>
            of(actions.deleteStudentFail(errorMessage.message))
          )
        )
      )
    )
  );

  deleteStudentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteStudentSuccess),
      map(() => actions.loadAllStudents())
    )
  );

  editStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.editStudent),
      mergeMap((action: any) =>
        this.StudentsService.updateStudent(action.singleStudent).pipe(
          map(() => actions.editStudentSuccess()),
          catchError((errorMessage) =>
            of(actions.editStudentFail(errorMessage.message))
          )
        )
      )
    )
  );

  editStudentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.editStudentSuccess),
      map(() => actions.loadAllStudents())
    )
  );

  createStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createStudent),
      mergeMap((action: any) =>
        this.StudentsService.addStudent(action.singleStudent).pipe(
          map(() => actions.createStudentSuccess()),
          catchError((errorMessage) =>
            of(actions.createStudentFail(errorMessage.message))
          )
        )
      )
    )
  );

  createStudentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createStudentSuccess),
      map(() => actions.loadAllStudents())
    )
  );

  constructor(
    private actions$: Actions,
    private StudentsService: StudentService,
    private router: Router,
    private store: Store
  ) { }
}
