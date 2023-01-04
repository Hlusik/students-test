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
    errorMessage: '',
  };

  it('should select the student list', () => {
    const result = getStudentsState.projector(initialState.students);
    expect(result.students.length).toEqual(2);
    expect(result.students[1].id).toEqual(2);
  });

  it('should select the student', () => {
    const result = getStudentsState.projector(
      initialState.student
    );
    expect(result.student.id).toEqual(1);
    expect(result.student.name).toEqual('First Student');
  });
});
