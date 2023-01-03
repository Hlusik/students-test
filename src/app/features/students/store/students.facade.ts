import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Student } from "src/app/features/students/student.model";
import { requestAllStudents, requestCreateStudent, requestDeleteStudent, requestEditStudent, requestSingleStudent } from "./students.actions";
import { StudentsState } from "./students.reducer";
import { getErrorMessage, getStudent, getStudents, isAllStudentsLoadingSelector, isSingleStudentLoadingSelector } from "./students.selectors";

@Injectable()
export class StudentsStateFacade {

    isAllStudentsLoading$ = this.store.select(isAllStudentsLoadingSelector);
    isSingleStudentLoading$ = this.store.select(isSingleStudentLoadingSelector);
    students$ = this.store.select(getStudents);
    student$ = this.store.select(getStudent);
    errorMessage$ = this.store.select(getErrorMessage);

    constructor(private store: Store<StudentsState>) { }

    getStudents(): void {
        this.store.dispatch( requestAllStudents());
    }

    getStudent(id: number): void {
        this.store.dispatch( requestSingleStudent({id}));
    }

    editStudent(student: Student, id: number): void {
        this.store.dispatch( requestEditStudent({student, id}));
    }

    createStudent(student: Student): void {
        this.store.dispatch( requestCreateStudent({student}));
    }

    deleteStudent(id: number):void {
        this.store.dispatch( requestDeleteStudent({id}));
    }
}
