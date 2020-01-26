import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeesComponent } from './Employees/Employees.component';
import { createEmployeesComponent } from './create-Employees/create-Employees.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DepartementComponent } from './Departement/Departement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE ,MatDatepickerModule, MatNativeDateModule,MatFormFieldModule,MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    createEmployeesComponent,
    DepartementComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
      MatNativeDateModule,
      MatFormFieldModule,
      MatInputModule
    
    
  ],
  providers: [

    {
      provide:MAT_DATE_LOCALE,useValue:'en-GB'
    }
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
