import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StudentsStateFacade } from 'src/app/features/students/store/students.facade';
import { Student } from '../student.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student: Student | undefined ;
  singleStudent$: Observable<Student> = this.studentService.singleStudent$;
  isSingleStudentLoading$: Observable<boolean> = this.studentService.isSingleStudentLoading$;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsStateFacade,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id);
    this.studentService.singleStudent$
      .subscribe({next: student => this.student = Object.assign({},student)});
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.student) {
      this.studentService.editStudent(this.student, this.student.id)
    }
  }

}
