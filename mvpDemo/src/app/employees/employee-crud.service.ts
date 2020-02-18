import { Injectable } from '@angular/core';
import { Employee } from '../employees/employees.model';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable()
export class EmployeeCrudService {
  id: number
  apiUrl: string;

  constructor(private httpclient: HttpClient, private route: Router, ) {
    this.apiUrl = environment.baseUrl;
  }

  public getEmloyees(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.apiUrl}`);
  }
  public getEmployee(id: number): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.apiUrl}` + `/${id}`)
  }
  public deleteEmployee(id: number): Observable<Employee[]> {

    this.id = id;
    return this.httpclient.delete<Employee[]>(`${this.apiUrl}` + `/${id}`);
  }
  public addData(employee: Employee):Observable<Employee> {
    return this.httpclient.post<Employee>(`${this.apiUrl}`, employee)
  }
  public editData(employee: Employee, id: number):Observable<Employee> {

    return this.httpclient.put<Employee>(`${this.apiUrl}` + `/${id}`, employee)
  }
  public getId(id: number) {
    this.route.navigate(['/form-container', id])
  }
  public searchData(searchText: string): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.apiUrl}?q=${searchText}`)
  }
  public sortData(sortField:string):Observable<Employee[]>
  {
    return this.httpclient.get<Employee[]>(`${this.apiUrl}?${sortField}`)
  }
}
