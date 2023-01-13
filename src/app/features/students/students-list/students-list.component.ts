import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsStateFacade } from 'src/app/features/students/store/students.facade';

import { Student } from '../student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  readonly students$: Observable<Student[]> = this.studentService.students$;
  isAllStudentsLoading$: Observable<boolean> = this.studentService.isAllStudentsLoading$;

  constructor(private studentService: StudentsStateFacade) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.createStudent({ name });
  }

  delete(student: Student): void {
    this.studentService.deleteStudent(student.id);
  }

}
