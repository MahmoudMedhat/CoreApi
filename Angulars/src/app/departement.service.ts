import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departement } from './Departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
Dep:Departement[]
  constructor(private http:HttpClient) { }
  URL:string="https://localhost:44337/api/Departements"
  getDep(){
    this.http.get(this.URL).toPromise().then(
      res=>{
        this.Dep=res as Departement[];
      }
    )
  }

  CreateDep( FormGroup:any){
    this.http.post(this.URL,FormGroup).toPromise().then(
      data=>{
       this.getDep();
             } ,err=>{console.log(err)}
       );  
  }
}
