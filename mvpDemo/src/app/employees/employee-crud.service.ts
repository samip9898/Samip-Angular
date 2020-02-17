import { Injectable } from '@angular/core';
import { Employee } from '../employees/employees.model';
 import { HttpClient } from '@angular/common/http';
 import { Observable, from } from 'rxjs';
 import { FormGroup } from '@angular/forms';
 import { Router } from '@angular/router';
 import { environment } from '../../environments/environment';



@Injectable()
export class EmployeeCrudService {
id : number
apiUrl : string;

  constructor(private httpclient:HttpClient, private route:Router,) { 
    this.apiUrl=environment.baseUrl;
  }

  getEmloyees() : Observable<Employee[]>{
    return this.httpclient.get<Employee[]>('http://localhost:3000/profiles');
  }
  getEmployee(id:number):Observable<Employee[]>
  {
    return this.httpclient.get<Employee[]>(`${this.apiUrl}`+`/${id}`)
  }
  deleteEmployee(id : number) : Observable<Employee[]>{
    
    this.id = id;
  return this.httpclient.delete<Employee[]>(`${this.apiUrl}`+`/${id}`);
  }
  addData(employee:Employee) 
  {
    return this.httpclient.post(`${this.apiUrl}`,employee).subscribe();
  }
  editData(employee:Employee,id:number) 
  
  {
   
    return this.httpclient.put(`${this.apiUrl}`+`/${id}`,employee).subscribe();
  }
  getId(id:number)
  {
      this.route.navigate(['/form-container',id])
  }
  searchEmployee(searchData){
    return this.httpclient.get(`${this.apiUrl}?q=${searchData}`);
  }

}
