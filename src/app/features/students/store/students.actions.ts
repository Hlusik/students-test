import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/features/students/student.model";

const actionTypePrefix = '[Students page] Request';

/**   all students   */
export const requestAllStudents = createAction(
    `${actionTypePrefix} All Students`,
);

export const requestAllStudentsSuccess = createAction(
    `${requestAllStudents.type} (Success)`,
    props<{students: Student[]}>(),
);

export const RequestAllStudentsFail = createAction(
    `${requestAllStudents.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   student   */
export const requestSingleStudent = createAction(
    `${actionTypePrefix} Student`,
    props<{id: number}>(),
);

export const requestSingleStudentSuccess = createAction(
    `${requestSingleStudent.type} (Success)`,
    props<{student: Student}>(),
);

export const RequestSingleStudentFail = createAction(
    `${requestSingleStudent.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   delete student   */
export const requestDeleteStudent = createAction(
    `${actionTypePrefix} Delete Student`,
    props<{id: number}>(),
);

export const requestDeleteStudentFail = createAction(
    `${requestDeleteStudent.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   edit student   */
export const requestEditStudent = createAction(
    `${actionTypePrefix} Edit Student`,
    props<{student: Student, id: number}>(),
);

export const requestEditStudentSuccess = createAction(
    `${requestEditStudent.type} (Success)`,
);

export const requestEditStudentFail = createAction(
    `${requestEditStudent.type} (Fail)`,
    props<{errorMessage: string}>()
);

/**   create student   */
export const requestCreateStudent = createAction(
    `${actionTypePrefix} Create Student`,
    props<{student: Student}>()
);

export const requestCreateStudentSuccess = createAction(
    `${requestCreateStudent.type} (Success)`,
);

export const requestCreateStudentFail = createAction(
    `${requestCreateStudent.type} (Fail)`,
    props<{errorMessage : string}>()
);