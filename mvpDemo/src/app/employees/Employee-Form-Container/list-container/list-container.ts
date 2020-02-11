import { Component, OnInit, Input } from '@angular/core';
import { EmployeeCrudService } from 'src/app/employees/employee-crud.service';
import { Observable } from 'rxjs';

import { Employee } from 'src/app/employees/employees.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.html',
  styleUrls: ['./list-container.scss']
})
export class ListContainerComponent implements OnInit {
  employeeData: Observable<Employee[]>;
  constructor(private crudservive: EmployeeCrudService) {
    this.getAllEmployees();
   }

  ngOnInit() {
  }

  getAllEmployees() {
    this.employeeData = this.crudservive.getEmloyees();
  }
}
