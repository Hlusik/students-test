import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';

import { Student } from 'src/app/features/students/student.model';

import { StudentsStateFacade } from '../../students/store/students.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students: Student[] = [];
  students$: Observable<Student[]> = this.studentService.students$;

  constructor(private studentService: StudentsStateFacade) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents();
    this.studentService.students$.pipe(take(5)).subscribe(topStudents => console.log(topStudents));
  }

}
