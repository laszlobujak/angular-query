import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from 'rxjs';
import { Employee } from "../api/employee.interface";

const BASE_PATH = 'http://localhost:3000/employees'

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    #httpClient = inject(HttpClient);

    getEmployees(): Observable<Employee[]> {
        return this.#httpClient.get<Employee[]>(BASE_PATH);
    }

    getEmployee(id: string): Observable<Employee> {
        return this.#httpClient.get<Employee>(`${BASE_PATH}/${id}`);
    }


    createEmployee(employee: Employee): Observable<Employee> {
        return this.#httpClient.post<Employee>(BASE_PATH, employee);
    }

    updateEmployee(id: string, employee: Employee): Observable<Employee> {
        return this.#httpClient.put<Employee>(`${BASE_PATH}/${id}`, employee);
    }

    deleteEmployee(id: string): Observable<Employee> {
        return this.#httpClient.delete<Employee>(`${BASE_PATH}/${id}`);
    }

}