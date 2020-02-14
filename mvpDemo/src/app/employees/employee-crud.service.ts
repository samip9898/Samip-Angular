import { Injectable } from '@angular/core';
import { Employee } from '../employees/employees.model';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { FormGroup } from '@angular/forms';
 import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {
id : number
baseUrl:string='http://localhost:3000/profiles';

  constructor(private httpclient:HttpClient, private route:Router) { }

  getEmloyees() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>('http://localhost:3000/profiles');
  }
  getEmployee(id:number):Observable<Employee[]>
  {
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`+`/${id}`)
  }
  deleteEmployee(id : number) : Observable<Employee[]>{
    
    this.id = id;
  return this.httpclient.delete<Employee[]>(`http://localhost:3000/profiles/${this.id}`);
  }
  addData(employee:FormGroup) 
  {
    return this.httpclient.post(`${this.baseUrl}`,employee.value).subscribe();
  }
  editData(employee:FormGroup,id:number) 
  
  {
    debugger
    return this.httpclient.put(`http://localhost:3000/profiles/${id}`,employee.value).subscribe();
  }
  getId(id:number)
  {
      this.route.navigate(['/form-container',id])
  }

}
