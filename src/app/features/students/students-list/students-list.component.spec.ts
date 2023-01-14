import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { StudentsStateFacade } from '../store/students.facade';
import { Student } from '../student.model';

import { StudentsListComponent } from './students-list.component';

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

let studentServiceFacade: StudentsStateFacade;

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [{
        provide: StudentsStateFacade,
        useFactory: () => jasmine.createSpyObj<StudentsStateFacade>('studentServiceFacade', [
          'getStudents',
          'createStudent',
          'deleteStudent',
      ]),
    }],
    })
    .compileComponents();

    let store = TestBed.get(Store);
    studentServiceFacade = TestBed.inject(StudentsStateFacade);

    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStudents method', () => {
    spyOn(component, 'getStudents');
    component.ngOnInit();
    expect(component.getStudents).toHaveBeenCalledTimes(1);
  });

  it('? should call getStudents method from service', () => {
    component.getStudents();
    expect(studentServiceFacade.getStudents).toHaveBeenCalledTimes(2);
  });

  it('should call createStudent method from service', () => {
    component.add('name');
    expect(studentServiceFacade.createStudent).toHaveBeenCalledTimes(1);
  });

  it('should not call createStudent method from service', () => {
    component.add(' ');
    expect(studentServiceFacade.createStudent).not.toHaveBeenCalled();
  });

  it('should call deleteStudent method from service', () => {
    let student = {
      id: 1,
      name: 'test name',
    }
    component.delete(student);
    expect(studentServiceFacade.deleteStudent).toHaveBeenCalledTimes(1);
  });

  xit('? should get students$', () => {
    let res: Student[] = [];
    spyOn<StudentsListComponent, any>(component, 'students$').and.callFake(of(mockStudents));
    component.students$.subscribe(students => res = students);

    expect(res).toEqual(mockStudents);
  });
});
