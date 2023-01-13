import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/features/students/student.model";

const actionTypePrefix = '[Students page]';

/**   all students   */
export const loadAllStudents = createAction(
    `${actionTypePrefix} load All Students`,
);

export const loadAllStudentsSuccess = createAction(
    `${loadAllStudents.type} (Success)`,
    props<{students: Student[]}>(),
);

export const loadAllStudentsFail = createAction(
    `${loadAllStudents.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   student   */
export const loadSingleStudent = createAction(
    `${actionTypePrefix} Student`,
    props<{id: number}>(),
);

export const loadSingleStudentSuccess = createAction(
    `${loadSingleStudent.type} (Success)`,
    props<{singleStudent: Student}>(),
);

export const loadSingleStudentFail = createAction(
    `${loadSingleStudent.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   delete student   */
export const deleteStudent = createAction(
    `${actionTypePrefix} Delete Student`,
    props<{id: number}>(),
);

export const deleteStudentSuccess = createAction(
    `${deleteStudent.type} (Success)`,
);

export const deleteStudentFail = createAction(
    `${deleteStudent.type} (Fail)`,
    props<{errorMessage : string}>(),
);

/**   edit student   */
export const editStudent = createAction(
    `${actionTypePrefix} Edit Student`,
    props<{singleStudent: Student, id: number}>(),
);

export const editStudentSuccess = createAction(
    `${editStudent.type} (Success)`,
);

export const editStudentFail = createAction(
    `${editStudent.type} (Fail)`,
    props<{errorMessage: string}>()
);

/**   create student   */
export const createStudent = createAction(
    `${actionTypePrefix} Create Student`,
    props<{singleStudent: Pick<Student, 'name'>}>()
);

export const createStudentSuccess = createAction(
    `${createStudent.type} (Success)`,
);

export const createStudentFail = createAction(
    `${createStudent.type} (Fail)`,
    props<{errorMessage : string}>()
);