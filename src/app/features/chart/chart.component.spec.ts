import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { StudentsStateFacade } from '../students/store/students.facade';
import { ChartComponent } from './chart.component';


xdescribe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [StudentsStateFacade],
    })
    .compileComponents();

    let store = TestBed.get(Store);

    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
