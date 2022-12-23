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
  students: Student[] = [];
  students$: Observable<Student[]> = this.studentService.students$;
  selectedStudent?: Student;

  constructor(private studentService: StudentsStateFacade) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents();
    this.students$ = this.studentService.students$;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.createStudent({ name } as Student);
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id);
  }

}