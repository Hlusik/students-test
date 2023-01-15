import { TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';
import {
  createStudent,
  createStudentSuccess,
  deleteStudent,
  deleteStudentSuccess,
  editStudent,
  editStudentSuccess,
  loadAllStudents,
  loadAllStudentsSuccess,
  loadSingleStudent,
  loadSingleStudentSuccess,
} from './students.actions';
import { StudentsEffects } from './students.effects';

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

const mockStudent: Student = {
  id: 2,
  name: 'Second Student',
};

const initialState = {
  students: [],
  student: {},
  isAllStudentsLoading: false,
  isSingleStudentLoading: false,
  errorMessage: ' ',
};

describe('Students Effects', () => {
  let actions$ = new BehaviorSubject<Action>({ type: loadAllStudents.type });
  let effects: StudentsEffects;
  let resultActions: Action[];
  let studentService: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        {
          provide: StudentService,
          useFactory: () =>
            jasmine.createSpyObj<StudentService>({
              getStudents: of(mockStudents),
              getStudent: of(mockStudent),
              deleteStudent: of(mockStudent),
              updateStudent: of(mockStudent),
              addStudent: of(mockStudent),
            }),
        },
      ],
    });
    effects = TestBed.inject(StudentsEffects);
    studentService = TestBed.inject(StudentService);
    resultActions = [];
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getStudents$', () => {
    it('should call getStudents method', () => {
      setAction(loadAllStudents);

      subscribeTo(effects.getStudents$);
      expect(resultActions).toEqual([
        loadAllStudentsSuccess({ students: mockStudents }),
      ]);
      expect(studentService.getStudents).toHaveBeenCalledTimes(1);
    });
  });

  describe('getStudent$', () => {
    it('should call getStudent method', () => {
      setAction(loadSingleStudent);

      subscribeTo(effects.getStudent$);
      expect(resultActions).toEqual([
        loadSingleStudentSuccess({ singleStudent: mockStudent }),
      ]);
      expect(studentService.getStudent).toHaveBeenCalledTimes(1);
    });
  });

  describe('delete Student', () => {
    it('should call deleteStudent method', () => {
      setAction(deleteStudent);

      subscribeTo(effects.deleteStudent$);
      expect(resultActions).toEqual([
        deleteStudentSuccess(),
      ]);
      expect(studentService.deleteStudent).toHaveBeenCalledTimes(1);
    });

    it('should call deleteStudentSuccess method', () => {
      setAction(deleteStudentSuccess);

      subscribeTo(effects.deleteStudentSuccess$);
      expect(resultActions).toEqual([
        loadAllStudents(),
      ]);
    });
  });

  describe('edit Student', () => {
    it('should call editStudent method', () => {
      setAction(editStudent);

      subscribeTo(effects.editStudent$);
      expect(resultActions).toEqual([
        editStudentSuccess(),
      ]);
      expect(studentService.updateStudent).toHaveBeenCalledTimes(1);
    });

    it('should call editStudentSuccess method', () => {
      setAction(editStudentSuccess);

      subscribeTo(effects.editStudentSuccess$);
      expect(resultActions).toEqual([
        loadAllStudents(),
      ]);
    });
  });

  describe('create Student', () => {
    it('should call createStudent method', () => {
      setAction(createStudent);

      subscribeTo(effects.createStudent$);
      expect(resultActions).toEqual([
        createStudentSuccess(),
      ]);
      expect(studentService.addStudent).toHaveBeenCalledTimes(1);
    });

    it('should call createStudentSuccess method', () => {
      setAction(createStudentSuccess);

      subscribeTo(effects.createStudentSuccess$);
      expect(resultActions).toEqual([
        loadAllStudents(),
      ]);
    });
  });

  function setAction(a: Action): void {
    actions$.next(a);
  }

  function subscribeTo(o: Observable<Action>): void {
    o.subscribe(
      (r) => resultActions.push(r),
      () => fail('There should be no errors here.')
    );
  }
});
