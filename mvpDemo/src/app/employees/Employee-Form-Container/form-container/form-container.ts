import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  private id:number
  public employeeDetails$:Observable<Employee[]>;

  constructor(private routes:ActivatedRoute,private employeeService:EmployeeCrudService, private route:Router){
    this.id=this.routes.snapshot.params['id']
  }

  ngOnInit()
  {
    if(this.id)
    {
      this.employeeDetails$=this.employeeService.getEmployee(this.id);
    }
  }

  createEmployee(empForm:Employee)
  {
    if(this.id)
    {
      this.employeeService.editData(empForm,this.id).subscribe(
        () =>{
          alert('EMPLOYEE UPDATED!')
          this.route.navigate(['/employees'])
        }
      )
      
    }
    else
    {
      console.log(empForm);
      this.employeeService.addData(empForm).subscribe(
        ()=>{
          alert('EMPLOYEE CREATED')
          this.route.navigate(['/employees'])
      })
    }
  }

}
