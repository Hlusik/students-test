import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { StudentsStateFacade } from '../store/students.facade';

import { StudentsListComponent } from './students-list.component';

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsListComponent ],
      imports: [StoreModule.forRoot({})],
      providers: [StudentsStateFacade],
    })
    .compileComponents();

    let store = TestBed.get(Store);

    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get students', () => {
    expect(component).toBeTruthy();
  });
});
