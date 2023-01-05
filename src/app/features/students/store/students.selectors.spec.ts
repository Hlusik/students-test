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
    const studentsRes: Student[] = [
      {
        id: 1,
        name: 'First Student',
      },
      {
        id: 2,
        name: 'Second Student',
      },
    ];
    const result = getStudentsState.projector(initialState);
    expect(result.students.length).toEqual(2);
    expect(result.students).toEqual(studentsRes);
  });

  it('should select the student', () => {
    const studentRes: Student = {
      id: 1,
      name: 'First Student',
    };
    const result = getStudentsState.projector(initialState);
    expect(result.student).toEqual(studentRes);
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
