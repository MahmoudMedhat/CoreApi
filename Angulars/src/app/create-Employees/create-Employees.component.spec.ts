import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { createEmployeesComponent } from './create-Employees.component';

describe('CreateDepComponent', () => {
  let component: createEmployeesComponent;
  let fixture: ComponentFixture<createEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [createEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(createEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
