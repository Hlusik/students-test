import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFactoryResolver } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Student } from '../features/students/student.model';

import { StudentService } from './student.service';

const mockStudents: Student[] = [
  {
    id: 1,
    name: 'First Student',
  },
  {
    id: 2,
    name: 'Second Student',
  },
];

const singleStudent: Student = {
  id: 2,
  name: 'Second Student',
};
const studentsUrl: string = 'api/students';

describe('StudentService', () => {
  let service: StudentService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StudentService,
      ],
    });
    service = TestBed.inject(StudentService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get students', () => {
    service.getStudents().subscribe();
    let  req = httpTestingController.expectOne(studentsUrl);

    expect(req.request.method).toEqual('GET');
    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(mockStudents);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should call http get student', () => {
    let id = 1;
    service.getStudent(id).subscribe();
    let  req = httpTestingController.expectOne(`${studentsUrl}/${id}`);

    expect(req.request.method).toEqual('GET');
  });

  it('should call http put student', () => {
    service.updateStudent(singleStudent).subscribe();
    let  req = httpTestingController.expectOne(studentsUrl);

    expect(req.request.method).toEqual('PUT');
  });

  it('should call http post student', () => {
    service.addStudent(singleStudent).subscribe();
    let  req = httpTestingController.expectOne(studentsUrl);

    expect(req.request.method).toEqual('POST');
  });

  it('should call http delete student', () => {
    let id = 1;
    service.deleteStudent(id).subscribe();
    let  req = httpTestingController.expectOne(`${studentsUrl}/${id}`);

    expect(req.request.method).toEqual('DELETE');
  });
});
