import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeCrudService } from 'src/app/employees/employee-crud.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Employee } from 'src/app/employees/employees.model';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.html',
  styleUrls: ['./form-container.scss']
})
export class FormContainer implements OnInit {

  id:number
  employeeDetails$:Observable<Employee[]>;

  constructor(private routes:ActivatedRoute,private employeeService:EmployeeCrudService){
    this.id=this.routes.snapshot.params['id']
  }

  ngOnInit()
  {
    if(this.id)
    {
      this.employeeDetails$=this.employeeService.getEmployee(this.id);
    }
  }

  createEmployee(empForm:FormGroup)
  {
    if(!this.id)
    {
      console.log(empForm.value);
      this.employeeService.addData(empForm)
    }
    else
    {
      console.log(empForm.value);
      this.employeeService.editData(empForm,this.id)
    }
  }

}
