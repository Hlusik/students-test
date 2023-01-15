import * as fromReducer from './students.reducer';
import {
  createStudent,
  createStudentFail,
  createStudentSuccess,
  deleteStudent,
  deleteStudentFail,
  deleteStudentSuccess,
  editStudent,
  editStudentFail,
  editStudentSuccess,
  loadAllStudents,
  loadAllStudentsFail,
  loadAllStudentsSuccess,
  loadSingleStudent,
  loadSingleStudentFail,
  loadSingleStudentSuccess,
} from './students.actions';
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
  singleStudent: {
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

  describe('All Students action', () => {
    it('should loadAllStudents and isAllStudentsLoading put in true state', () => {
      const { initialState } = fromReducer;

      const action = loadAllStudents();
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.isAllStudentsLoading).toEqual(true);
      expect(state).not.toBe(initialState);
    });

    it('should retrieve all students and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = loadAllStudentsSuccess({ students: newState.students });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.students).toEqual(newState.students);
      expect(state.isAllStudentsLoading).toEqual(false);
      expect(state).not.toBe(initialState);
    });

    it('should retrieve loadAllStudentsFail and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = loadAllStudentsFail({ errorMessage: newState.errorMessage });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.errorMessage).toEqual(newState.errorMessage);
      expect(state.isAllStudentsLoading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });

  describe('single Students action', () => {
    it('should load single Students and is single StudentsLoading put in true state', () => {
      const { initialState } = fromReducer;

      const action = loadSingleStudent({id: 1});
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.isSingleStudentLoading).toEqual(true);
      expect(state).not.toBe(initialState);
    });

    it('should retrieve single student and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = loadSingleStudentSuccess({
        singleStudent: newState.singleStudent,
      });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.singleStudent).toEqual(newState.singleStudent);
      expect(state.isSingleStudentLoading).toEqual(false);
      expect(state).not.toBe(initialState);
    });

    it('should retrieve load single StudentsFail and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = loadSingleStudentFail({ errorMessage: newState.errorMessage });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.errorMessage).toEqual(newState.errorMessage);
      expect(state.isSingleStudentLoading).toEqual(false);
      expect(state).not.toBe(initialState);
    });
  });

  describe('delete Students action', () => {
    it('should retrieve delete student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = deleteStudent({ id: 2 });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve delete student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = deleteStudentSuccess();
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve delete student and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = deleteStudentFail({ errorMessage: newState.errorMessage });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.errorMessage).toEqual(newState.errorMessage);
      expect(state).not.toBe(initialState);
    });
  });

  describe('edit Students action', () => {
    it('should retrieve edit student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = editStudent({ singleStudent: newState.singleStudent, id: 2 });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve edit student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = editStudentSuccess();
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve edit student and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = editStudentFail({ errorMessage: newState.errorMessage });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.errorMessage).toEqual(newState.errorMessage);
      expect(state).not.toBe(initialState);
    });
  });

  describe('create Students action', () => {
    it('should retrieve create student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = createStudent({ singleStudent: newState.singleStudent});
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve create student and not update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = createStudentSuccess();
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should retrieve create student and update the state in an immutable way', () => {
      const { initialState } = fromReducer;

      const action = createStudentFail({ errorMessage: newState.errorMessage });
      const state = fromReducer.studentsReducer(initialState, action);

      expect(state.errorMessage).toEqual(newState.errorMessage);
      expect(state).not.toBe(initialState);
    });
  });
});
