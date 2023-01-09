import { TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';
import {
  requestAllStudents,
  requestAllStudentsSuccess,
  requestSingleStudent,
  requestSingleStudentSuccess,
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
  let actions$ = new BehaviorSubject<Action>({ type: requestAllStudents.type });
  let effects: StudentsEffects;
  let resultActions: Action[];
  // let store: MockStore<StudentsState>;
  let studentService: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        {
          provide: StudentService,
          useFactory: () => jasmine.createSpyObj<StudentService>({
            getStudents: of(mockStudents),
            getStudent: of(mockStudent),
          }),
        },
      ],
    });
    effects = TestBed.inject(StudentsEffects);
    // store = TestBed.inject(MockStore);
    studentService = TestBed.inject(StudentService);
    resultActions = [];
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getStudents$', () => {
    it('should call getStudents method', () => {
      setAction(requestAllStudents);

      subscribeTo(effects.getStudents$);
      expect(resultActions).toEqual([
        requestAllStudentsSuccess({ students: mockStudents })
      ]);
      expect(studentService.getStudents).toHaveBeenCalledTimes(1);
    });

    it('should call getStudent method', () => {
      setAction(requestSingleStudent);

      subscribeTo(effects.getStudent$);
      expect(resultActions).toEqual([
        requestSingleStudentSuccess({ student: mockStudent })
      ]);
      expect(studentService.getStudent).toHaveBeenCalledTimes(1);
    });
  });

  function setAction( a: Action): void {
    actions$.next(a);
  }

  function subscribeTo(o: Observable<Action>): void {
    o.subscribe(
      r => resultActions.push(r),
      () => fail('There should be no errors here.'),
    );
  }
});
