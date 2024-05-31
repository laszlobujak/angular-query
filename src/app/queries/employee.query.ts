import { inject } from "@angular/core"
import { randCountry, randEmail, randFullName } from '@ngneat/falso'
import { injectMutation, injectQuery, injectQueryClient } from "@tanstack/angular-query-experimental"
import { lastValueFrom } from "rxjs"
import { Employee } from "../api/employee.interface"
import { EmployeeService } from "../service/employee.service"

export const authorQueryKeys = {
    allEmployees: () => ['employees'],
    employeeDetails: (id: Employee['id']) => ['employee', id]
}

export function injectAddEmployeeMutation() {
    const employeeService = inject(EmployeeService)
    const queryClient = injectQueryClient();

    return injectMutation(() => ({
        mutationFn: () => lastValueFrom(employeeService.createEmployee({
            id: '',
            email: randEmail(),
            country: randCountry(),
            name: randFullName()
        })),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: authorQueryKeys.allEmployees() })
        },
    }))
}