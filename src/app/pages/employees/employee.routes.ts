import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailsComponent } from '../employee.details/employee.details.component';


export const EMPLOYEE_ROUTES: Routes = [
  { path: '', component: EmployeeComponent },
  { path: ':id', component: EmployeeDetailsComponent },
];
