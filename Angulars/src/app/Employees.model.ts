import { DecimalPipe } from '@angular/common';
import { Departement } from './Departement.model';


export class Employes {
   
   id:number;
   name:string;
   salary:number;
   dep:Departement[];
   gender:string;
   expireDate:Date;
    
}
