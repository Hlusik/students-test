import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Student } from '../student.model';

import { createStudent, deleteStudent, editStudent, loadAllStudents, loadSingleStudent } from './students.actions';
import { StudentsStateFacade } from './students.facade';
import {
  getErrorMessage,
  getStudent,
  getStudents,
  getTopStudents,
  isAllStudentsLoadingSelector,
  isSingleStudentLoadingSelector,
} from './students.selectors';

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

describe('StudentsStateFacade', () => {
  let service: StudentsStateFacade;
  let store: MockStore;

  afterEach(() => {
    store?.resetSelectors();
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        StudentsStateFacade,
        provideMockStore({
          selectors: [
            {
              selector: isAllStudentsLoadingSelector,
              value: false,
            },
            {
              selector: isSingleStudentLoadingSelector,
              value: false,
            },
            {
              selector: getStudents,
              value: mockStudents,
            },
            {
              selector: getTopStudents,
              value: mockStudents,
            },
            {
              selector: getStudent,
              value: singleStudent,
            },
            {
              selector: getErrorMessage,
              value: 'error message',
            },
          ],
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    service = TestBed.inject(StudentsStateFacade);
    store.dispatch = jasmine.createSpy();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should dispatch allStudents', () => {
    service.getStudents();

    expect(store.dispatch).toHaveBeenCalledWith(loadAllStudents());
  });

  it('should dispatch getSingleStudent', () => {
    let id: number = 2;
    service.getStudent(id);

    expect(store.dispatch).toHaveBeenCalledWith(loadSingleStudent({ id }));
  });

  it('should dispatch editStudent', () => {
    let id: number = 2;
    service.editStudent(singleStudent, id);

    expect(store.dispatch).toHaveBeenCalledWith(editStudent({ singleStudent, id }));
  });

  it('should dispatch createStudent', () => {
    service.createStudent(singleStudent);

    expect(store.dispatch).toHaveBeenCalledWith(createStudent({ singleStudent }));
  });

  it('should dispatch deleteStudent', () => {
    let id: number = 2;
    service.deleteStudent(id);

    expect(store.dispatch).toHaveBeenCalledWith(deleteStudent({ id }));
  });
});
