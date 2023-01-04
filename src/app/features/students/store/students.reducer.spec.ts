import * as fromReducer from './students.reducer';
import { requestAllStudents, requestAllStudentsSuccess } from './students.actions';

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
        isAllStudentsLoading: false,
        isSingleStudentLoading: false,
        errorMessage: '',
      };
      const action = requestAllStudentsSuccess({ students: newState.students });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(initialState);
    });
  });
});
