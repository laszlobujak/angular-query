import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { randCountry, randEmail, randFullName } from '@ngneat/falso';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { injectMutation, injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTableModule } from 'ng-zorro-antd/table';
import { lastValueFrom } from 'rxjs';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  imports: [
    AngularQueryDevtools,
    NzSkeletonModule,
    NzAlertModule,
    NzTableModule,
  ]
})
export class EmployeeComponent {
  #employeeService = inject(EmployeeService);
  #router = inject(Router);
  #queryClient = injectQueryClient();

  
  addEmployeeMutation = injectMutation(() => ({
    mutationFn: () => lastValueFrom(this.#employeeService.createEmployee({
      id: '',
      email: randEmail(),
      country: randCountry(),
      name: randFullName()
    })),
    onSuccess: () => {
      this.#queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
  }));


  employees = injectQuery(() => ({
    queryKey: ['employees'],
    queryFn: () => lastValueFrom(this.#employeeService.getEmployees()),
    staleTime: 1000 * 5,
    retry: true,
    retryDelay: 1000
  }))


  visitDetailsPage(id: string) {
    this.#router.navigate(['employee', id]);
  }

  add() {
    this.addEmployeeMutation.mutate();
  }


}
