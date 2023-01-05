import * as fromReducer from './students.reducer';
import { requestAllStudentsSuccess, requestDeleteStudent, requestSingleStudentSuccess } from './students.actions';
import { Student } from '../student.model';

const newState: fromReducer.StudentsState = {
  students: [
    {
      id: 1,
      name: 'First Student',
    },
    {
      id: 2,
      name: 'Second Student',
    },
  ],
  student: {
    id: 1,
    name: 'First Student',
  },
  isAllStudentsLoading: true,
  isSingleStudentLoading: true,
  errorMessage: 'Error',
};

describe('StudentsReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('requestAllStudents action', () => {
    it('should retrieve all students and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = requestAllStudentsSuccess({ students: newState.students });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.students).toEqual(newState.students);
      expect(state).not.toBe(initialState);
    });

    it('should retrieve single student and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = requestSingleStudentSuccess({ student: newState.student });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.student).toEqual(newState.student);
      expect(state).not.toBe(initialState);
    });

    xit('should retrieve delete student and update the state in an immutable way', () => {
      const initialState: fromReducer.StudentsState = {
        ...fromReducer.initialState,
        students: [
          {
            id: 1,
            name: 'First Student',
          },
          {
            id: 2,
            name: 'Second Student',
          },
        ],
      };
      const deletedStudents: Student[] = [{
            id: 1,
            name: 'First Student',
          }];

      const action = requestDeleteStudent({ id: 2 });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.students).toEqual(deletedStudents);
      // expect(state).not.toBe(initialState);
    });
  });
});
