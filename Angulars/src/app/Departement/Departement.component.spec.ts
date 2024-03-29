import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartementComponent } from './Departement.component';



describe('EmployeComponent', () => {
  let component: DepartementComponent;
  let fixture: ComponentFixture<DepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
