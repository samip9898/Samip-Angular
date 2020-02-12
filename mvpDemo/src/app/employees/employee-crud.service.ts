import { Injectable } from '@angular/core';
import { Employee } from '../employees/employees.model';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
id : number
  constructor(private httpclient:HttpClient) { }

  getEmloyees() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(' http://localhost:3000/profiles');
  }
  deleteEmployee(id : number) : Observable<Employee[]>{
    
    this.id = id;
  return this.httpclient.delete<Employee[]>(`http://localhost:3000/profiles/${this.id}`);
  }

}
