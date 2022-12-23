import { Action, createReducer, on } from "@ngrx/store";

import { Student } from "src/app/studentsModule/student.model";
import * as StudentsPageActions from './students.actions';

export const studentsFeatureKey = 'studentsFeatureKey';

export interface StudentsState {
    students : Student[],
    student: Student,
    isAllStudentsLoading: boolean,
    isSingleStudentLoading: boolean,
    errorMessage: string,
}

export const initialState: StudentsState = {
    students : [],
    student: {
        id: 0,
        name: ''
    },
    isAllStudentsLoading: false,
    isSingleStudentLoading: false,
    errorMessage: '',
}

export const reducer = createReducer(
    initialState,
    on(StudentsPageActions.requestAllStudents, state => ({ ...state })),
    on(StudentsPageActions.requestAllStudentsSuccess, (state, {students}) => ({ ...state, students: students })),
    on(StudentsPageActions.RequestAllStudentsFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage })),

    on(StudentsPageActions.requestSingleStudent, state => ({ ...state })),
    on(StudentsPageActions.requestSingleStudentSuccess, (state, {student}) => ({ ...state, student: student })),
    on(StudentsPageActions.RequestSingleStudentFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage })),

    on(StudentsPageActions.requestDeleteStudent, state => ({ ...state })),
    on(StudentsPageActions.RequestSingleStudentFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage })),

    on(StudentsPageActions.requestEditStudent, state => ({ ...state })),
    on(StudentsPageActions.requestEditStudentSuccess, state => ({ ...state })),
    on(StudentsPageActions.requestEditStudentFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage })),

    on(StudentsPageActions.requestCreateStudent, state => ({ ...state })),
    on(StudentsPageActions.requestCreateStudentSuccess, state => ({ ...state })),
    on(StudentsPageActions.requestCreateStudentFail, (state, {errorMessage}) => ({ ...state, errorMessage: errorMessage })),
);

export const studentsReducer = (state: StudentsState, action: Action): StudentsState => reducer(state, action);