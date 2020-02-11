import { Injectable } from '@angular/core';
import { Employee } from '../employees/employees.model';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  constructor(private httpclient:HttpClient) { }

  getEmloyees() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(' http://localhost:3000/profiles');
  }
}
