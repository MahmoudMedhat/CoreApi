import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../Employees.service';


@Component({
  selector: 'app-departements',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private Services:EmployeesService) { }

  ngOnInit() {
    this.Services.getEmp();
  }

}
