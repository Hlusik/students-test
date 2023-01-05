import { TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';
import { requestAllStudents, requestAllStudentsSuccess } from './students.actions';
import { StudentsEffects } from './students.effects';
import { StudentsState } from './students.reducer';

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

const initialState = {
  students: [],
  student: {},
  isAllStudentsLoading: false,
  isSingleStudentLoading: false,
  errorMessage: ' ',
}

class MockStudentService {
  getStudents() {
    return of(mockStudents);
  }
}

describe('Students Effects', () => {
  let actions$: Observable<Action>;
  let effects: StudentsEffects;
  let store: MockStore<StudentsState>;
  // let store: MockStore<Pick<StudentsState, 'students'>>;
  let studentService: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StudentsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: StudentService, useClass: MockStudentService },
      ],
    });
    effects = TestBed.inject(StudentsEffects);
    store = TestBed.inject(MockStore);
    studentService = TestBed.inject(StudentService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('getStudents$', () => {
    it('should call getStudents method', (done) => {
      const spy = spyOn(studentService, 'getStudents').and.callThrough();

      actions$ = of(requestAllStudents);

      effects.getStudents$.subscribe((res) => {
        expect(res).toEqual(requestAllStudentsSuccess({ students: mockStudents }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
