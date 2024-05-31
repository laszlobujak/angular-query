import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/employee' },
  { path: 'employee', loadChildren: () => import('./pages/employees/employee.routes').then(m => m.EMPLOYEE_ROUTES) }
];
