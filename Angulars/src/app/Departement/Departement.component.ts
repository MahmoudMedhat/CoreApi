import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../departement.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-Dep',
  templateUrl: './Departement.component.html',
  styleUrls: ['./Departement.component.css']
})
export class DepartementComponent implements OnInit {
  DepForm: FormGroup;
  constructor(private services:DepartementService,private fb:FormBuilder) { }

  ngOnInit() {
    this.services.getDep();
    this.DepForm = this.fb.group({
      name: ['']
    }); 
    
  }
  onSubmit() { 
    var Data={
      "name":  this.DepForm.get("name").value
    }
    this.services.CreateDep(Data);
    
  }

}
