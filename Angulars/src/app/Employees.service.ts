import { Injectable } from '@angular/core';
import { Employes } from './Employees.model';
import { HttpClient } from '@angular/common/http';
import { Departement } from './Departement.model';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

Emps:Employes[];
GetURL:string='https://localhost:44337/api/Employees';
  constructor(private http:HttpClient) { }

  getEmp(){
    this.http.get(this.GetURL).toPromise().then(
      res=>{
        this.Emps=res as Employes[];
      }
    )
  }
  CreateEmp( FormGroup:any){
    this.http.post(this.GetURL,FormGroup).toPromise().then(
      data=>{
       this.getEmp();
             } ,err=>{console.log(err)}
       );  
  }
  UpdateEmp(FormGroup:any,ID:number){
    this.http.put(this.GetURL+'/'+ID,FormGroup).toPromise().then(
      data=>{
        this.getEmp();
      },err=>{console.log(err)}
    )

  }
  
  
}
