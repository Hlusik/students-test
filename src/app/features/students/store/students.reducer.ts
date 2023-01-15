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
  on(StudentsPageActions.loadAllStudents, state => ({...state, isAllStudentsLoading: true, errorMessage: ''})),
  on(StudentsPageActions.loadAllStudentsSuccess, (state, {students}) => ({...state, students: students, isAllStudentsLoading: false, errorMessage: 'Students are successfully loaded!' })),
  on(StudentsPageActions.loadAllStudentsFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isAllStudentsLoading: false })),

  on(StudentsPageActions.loadSingleStudent, state => ({...state, isSingleStudentLoading: true, errorMessage: ''})),
  on(StudentsPageActions.loadSingleStudentSuccess, (state, {singleStudent}) => ({...state, singleStudent: singleStudent, isSingleStudentLoading: false, errorMessage: 'Single Student is successfully loaded!'})),
  on(StudentsPageActions.loadSingleStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isSingleStudentLoading: false})),

  on(StudentsPageActions.deleteStudent, state => ({...state, errorMessage: '', isAllStudentsLoading: true})),
  on(StudentsPageActions.deleteStudentSuccess, state => ({...state, errorMessage: 'Student is successfully deleted!', isAllStudentsLoading: false})),
  on(StudentsPageActions.deleteStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isAllStudentsLoading: false})),

  on(StudentsPageActions.editStudent, state => ({...state, errorMessage: '', isAllStudentsLoading: true})),
  on(StudentsPageActions.editStudentSuccess, state => ({...state, errorMessage: 'Student is successfully updated!', isAllStudentsLoading: false})),
  on(StudentsPageActions.editStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isAllStudentsLoading: false})),

  on(StudentsPageActions.createStudent, state => ({...state, errorMessage: '', isAllStudentsLoading: true})),
  on(StudentsPageActions.createStudentSuccess, state => ({...state, errorMessage: 'Student is successfully created!', isAllStudentsLoading: false})),
  on(StudentsPageActions.createStudentFail, (state, {errorMessage}) => ({...state, errorMessage: errorMessage, isAllStudentsLoading: false}))
);

export const studentsReducer = (state: StudentsState, action: Action): StudentsState => reducer(state, action);
