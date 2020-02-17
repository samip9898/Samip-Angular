import { Component, OnInit, Input } from '@angular/core';
import { EmployeeCrudService } from 'src/app/employees/employee-crud.service';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/employees/employees.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.html',
  styleUrls: ['./list-container.scss']
})
export class ListContainer implements OnInit {

  public emp;
  employeeData: Observable<Employee[]>;

  constructor(private crudservice: EmployeeCrudService) {
    this.getAllEmployees();
  }

  ngOnInit() {
  }

  getAllEmployees() {
    this.employeeData = this.crudservice.getEmloyees();
  }

  deleteEmployee(id: number) {

    this.crudservice.deleteEmployee(id).subscribe();
    this.getAllEmployees();
  }
  editEmployee(id:number)
    {
        this.crudservice.getId(id)
    }
    searchEmployee(searchData){
      this.emp=this.crudservice.searchEmployee(searchData).subscribe(
        data=>{
          this.emp=data;
        }
      );
    }
}
