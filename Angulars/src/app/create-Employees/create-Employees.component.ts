import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { EmployeesService } from '../Employees.service';
import { DepartementService } from '../departement.service';
import { isNull } from 'util';
import{ BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-Emp',
  templateUrl: './create-Employees.component.html',
  styleUrls: ['./create-Employees.component.css']
})
 
export class createEmployeesComponent implements OnInit {
  public dpConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();

  EmpForm: FormGroup;
  formattedMessage: string;
  constructor( private fb:FormBuilder,private services :EmployeesService,
   private DepServices:DepartementService
  ,private Services:EmployeesService  ) { 
    this.dpConfig.containerClass = 'theme red white blue'; //or whatever color
    
  } 
  ngOnInit() {
    
   this.DepServices.getDep()
   this.Services.getEmp();
    this.EmpForm = this.fb.group({
      name: [''],
      salary: [''],
      deps: [''],
      id:[],
      Gender:[],
      Date:[]
    }); 
    //this.onChanges(); 
  } 
  onSubmit() {  
    
    var Date=  new DatePipe('en').transform(this.EmpForm.get("Date").value, 'yyyy-MM-dd');
    console.log(Date)
    var Updatevalue= {
      "id":this.EmpForm.get("id").value,
     "name":  this.EmpForm.get("name").value
   , "salary": this.EmpForm.get("salary").value, 
     "dep_ID": +this.EmpForm.get("deps").value,
     "gender": this.EmpForm.get("Gender").value,
   "expireDate":Date
  }
  var Insertedvalue= {
   "name":  this.EmpForm.get("name").value
 , "salary": this.EmpForm.get("salary").value, 
   "dep_ID": +this.EmpForm.get("deps").value,
   "gender": this.EmpForm.get("Gender").value,
   "expireDate":Date
}
   
  if (isNull(this.EmpForm.get("id").value )) {
    this.services.CreateEmp(Insertedvalue);
  } else {
    this.services.UpdateEmp(Updatevalue,this.EmpForm.get("id").value);
  }
  
  }
  //onChanges(): void {
    //this.EmpForm.get('name').valueChanges.subscribe(val => {
    //this.formattedMessage = `My name is ${val}.`;
    //console.log(this.formattedMessage);
    //});
  //}
  OnClick(Emp){
    this.EmpForm = this.fb.group({
      name: [Emp.name],
      salary: [Emp.salary],
      deps: [Emp.dep_ID],
      id:[Emp.id],
      Gender:[Emp.gender],
      Date:[Emp.expireDate]
     
    }); 
    
  }
}


