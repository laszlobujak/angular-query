import { Component, Signal, inject, input } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { lastValueFrom } from 'rxjs';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee.details',
  standalone: true,
  imports: [NzAlertModule, NzSpinModule],
  templateUrl: './employee.details.component.html',
  styleUrl: './employee.details.component.scss'
})
export class EmployeeDetailsComponent {

  id: Signal<string> = input.required();
  #employeeService = inject(EmployeeService);

  employee = injectQuery(() => ({
    queryKey: ['employees', this.id()],
    queryFn: () => lastValueFrom(this.#employeeService.getEmployee(this.id())),
    staleTime: 1000 * 1
  }));
}
