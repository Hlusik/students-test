import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StudentDetailComponent } from './student-detail.component';
import { StudentsStateFacade } from '../store/students.facade';
import { Store, StoreModule } from '@ngrx/store';

describe('StudentDetailComponent', () => {
  let component: StudentDetailComponent;
  let fixture: ComponentFixture<StudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDetailComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [StudentsStateFacade],
    })
    .compileComponents();

    let store = TestBed.get(Store);

    fixture = TestBed.createComponent(StudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
