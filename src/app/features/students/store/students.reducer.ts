import {Action, createReducer, on} from '@ngrx/store';

import {Student} from 'src/app/features/students/student.model';
import * as StudentsPageActions from './students.actions';

export const studentsFeatureKey = 'studentsFeatureKey';

export interface StudentsState {
  students: Student[],
  singleStudent: Student,
  isAllStudentsLoading: boolean,
  isSingleStudentLoading: boolean,
  errorMessage: string,
}

export const initialState: StudentsState = {
  students: [],
  singleStudent: {
    id: 0,
    name: ''
  },
  isAllStudentsLoading: true,
  isSingleStudentLoading: true,
  errorMessage: '',
};

const reducer = createReducer(
  initialState,
  on(StudentsPageActions.loadAllStudents, state => ({...state, isAllStudentsLoading: true})),
  on(StudentsPageActions.loadAllStudentsSuccess, (state, {students}) => ({...state, students: students, isAllStudentsLoading: false })),
  on(StudentsPageActions.loadAllStudentsFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isAllStudentsLoading: false })),

  on(StudentsPageActions.loadSingleStudent, state => ({...state, isSingleStudentLoading: true})),
  on(StudentsPageActions.loadSingleStudentSuccess, (state, {singleStudent}) => ({...state, singleStudent: singleStudent, isSingleStudentLoading: false})),
  on(StudentsPageActions.loadSingleStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isSingleStudentLoading: false})),

  on(StudentsPageActions.deleteStudent, state => ({...state})),
  on(StudentsPageActions.deleteStudentSuccess, state => ({...state})),
  on(StudentsPageActions.deleteStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage})),

  on(StudentsPageActions.editStudent, state => ({...state})),
  on(StudentsPageActions.editStudentSuccess, state => ({...state})),
  on(StudentsPageActions.editStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage})),

  on(StudentsPageActions.createStudent, state => ({...state})),
  on(StudentsPageActions.createStudentSuccess, state => ({...state})),
  on(StudentsPageActions.createStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage}))
);

export const studentsReducer = (state: StudentsState, action: Action): StudentsState => reducer(state, action);
