import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Student } from "src/app/features/students/student.model";
import { createStudent, deleteStudent, editStudent, loadAllStudents, loadSingleStudent } from "./students.actions";
import { StudentsState } from "./students.reducer";
import { getErrorMessage, getStudent, getStudents, getTopStudents, isAllStudentsLoadingSelector, isSingleStudentLoadingSelector } from "./students.selectors";

@Injectable()
export class StudentsStateFacade {

    isAllStudentsLoading$ = this.store.select(isAllStudentsLoadingSelector);
    isSingleStudentLoading$ = this.store.select(isSingleStudentLoadingSelector);
    students$ = this.store.select(getStudents);
    topStudents$ = this.store.select(getTopStudents);
    singleStudent$ = this.store.select(getStudent);
    errorMessage$ = this.store.select(getErrorMessage);

    constructor(private store: Store<StudentsState>) { }

    getStudents(): void {
        this.store.dispatch( loadAllStudents());
    }

    getStudent(id: number): void {
        this.store.dispatch( loadSingleStudent({id}));
    }

    editStudent(singleStudent: Student, id: number): void {
        this.store.dispatch( editStudent({singleStudent, id}));
    }

    createStudent(singleStudent: Pick<Student, 'name'>): void {
        this.store.dispatch( createStudent({ singleStudent }));
    }

    deleteStudent(id: number):void {
        this.store.dispatch( deleteStudent({id}));
    }
}
