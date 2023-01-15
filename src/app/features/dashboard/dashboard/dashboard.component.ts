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
  students$: Observable<Student[]> = this.studentService.topStudents$;
  isAllStudentsLoading$: Observable<boolean> = this.studentService.isAllStudentsLoading$;
  message$: Observable<string> = this.studentService.errorMessage$;

  constructor(private studentService: StudentsStateFacade) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents();
  }

}
