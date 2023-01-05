import { Student } from '../student.model';
import { StudentsState } from './students.reducer';
import { getStudentsState } from './students.selectors';

describe('Selectors', () => {
  const initialState: StudentsState = {
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
    errorMessage: 'Error',
  };

  it('should select the student list', () => {
    const result = getStudentsState.projector(initialState);
    expect(result.students.length).toEqual(2);
    expect(result.students[1].id).toEqual(2);
  });

  it('should select the student', () => {
    const result = getStudentsState.projector(initialState);
    expect(result.student.id).toEqual(1);
    expect(result.student.name).toEqual('First Student');
  });

  it('should select the is All Students Loading', () => {
    const result = getStudentsState.projector(initialState);
    expect(result.isAllStudentsLoading).toEqual(false);
  });

  it('should select the is single Students Loading', () => {
    const result = getStudentsState.projector(initialState);
    expect(result.isSingleStudentLoading).toEqual(false);
  });

  it('should select the errorMessage', () => {
    const result = getStudentsState.projector(initialState);
    expect(result.errorMessage).toEqual('Error');
  });
});
