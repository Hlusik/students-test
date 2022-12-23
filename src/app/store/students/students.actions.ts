import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/studentsModule/student.model";

export enum StudentsType{
    RequestAllStudents = '[Students page] Request All Students',
    RequestAllStudentsSuccess = '[Students page] Request All Students Success',
    RequestAllStudentsFail = '[Students page] Request All Students Fail',

    RequestSingleStudent = '[Students page] Request Student',
    RequestSingleStudentSuccess = '[Students page] Request Student Success',
    RequestSingleStudentFail = '[Students page] Request Student Fail',

    RequestFilteredStudents = '[Students page] Request Filtered Students',
    RequestFilteredStudentsSuccess = '[Students page] Request Filtered Students Success',

    RequestDeleteStudent = '[Students page] Request Delete Student',
    RequestDeleteStudentFail = '[Students page] Request Delete Student Fail',

    RequestEditStudent = '[Students page] Request Edit Student',
    RequestEditStudentSuccess = '[Students page] Request Edit Student Success',
    RequestEditStudentFail = '[Students page] Request Filtered Students Fail',

    RequestCreateStudent = '[Students page] Request Create Student',
    RequestCreateStudentSuccess = '[Students page] Request Create Student Success',
    RequestCreateStudentFail = '[Students page] Request Create Students Fail',
}

//--------------all students-----------------------------
export const requestAllStudents = createAction(
    StudentsType.RequestAllStudents
);

export const requestAllStudentsSuccess = createAction(
    StudentsType.RequestAllStudentsSuccess,
    props<{students: Student[]}>()
);

export const RequestAllStudentsFail = createAction(
    StudentsType.RequestAllStudentsFail,
    props<{errorMessage : string}>()
);

//--------------student-----------------------------
export const requestSingleStudent = createAction(
    StudentsType.RequestSingleStudent,
    props<{id: number}>()
);

export const requestSingleStudentSuccess = createAction(
    StudentsType.RequestSingleStudentSuccess,
    props<{student: Student}>()
);

export const RequestSingleStudentFail = createAction(
    StudentsType.RequestSingleStudentFail,
    props<{errorMessage : string}>()
);

//--------------delete student-----------------------------
export const requestDeleteStudent = createAction(
    StudentsType.RequestDeleteStudent,
    props<{id: number}>()
);

export const requestDeleteStudentFail = createAction(
    StudentsType.RequestDeleteStudentFail,
    props<{errorMessage : string}>()
);

//--------------edit student-----------------------------
export const requestEditStudent = createAction(
    StudentsType.RequestEditStudent,
    props<{student: Student, id: number}>()
);

export const requestEditStudentSuccess = createAction(
    StudentsType.RequestEditStudentSuccess
);

export const requestEditStudentFail = createAction(
    StudentsType.RequestEditStudentFail,
    props<{errorMessage: string}>()
);

//--------------create student-----------------------------
export const requestCreateStudent = createAction(
    StudentsType.RequestCreateStudent,
    props<{student: Student}>()
);

export const requestCreateStudentSuccess = createAction(
    StudentsType.RequestCreateStudentSuccess
);

export const requestCreateStudentFail = createAction(
    StudentsType.RequestCreateStudentFail,
    props<{errorMessage : string}>()
);