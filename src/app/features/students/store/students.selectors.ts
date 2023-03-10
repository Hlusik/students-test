import { createFeatureSelector, createSelector } from "@ngrx/store";
import { studentsFeatureKey, StudentsState } from "./students.reducer";


export const getStudentsState = createFeatureSelector<StudentsState>(studentsFeatureKey);

export const isAllStudentsLoadingSelector = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.isAllStudentsLoading
);

export const isSingleStudentLoadingSelector = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.isSingleStudentLoading
);

export const getStudents = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.students
);

export const getTopStudents = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.students?.slice(0,5)
);

export const getStudent = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.singleStudent
);

export const getErrorMessage = createSelector(
    getStudentsState,
    (StudentsState: StudentsState) => StudentsState.errorMessage
);