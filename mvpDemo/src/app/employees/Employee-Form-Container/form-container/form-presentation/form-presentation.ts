import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
import{ FormPresenter } from '../form-presenter/form-presenter';
import { Employee } from 'src/app/employees/employees.model';

import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.html',
  styleUrls: ['./form-presentation.scss']
})
export class FormPresentation implements OnChanges {

  @Input() employee:Employee;
  @Output() createEvent= new EventEmitter<Employee>()
  constructor(private empFormPresenter:FormPresenter){
    this.empForm= this.empFormPresenter.createEmployeeForm()
      this.departments=this.empFormPresenter.departments
  }
  empForm:FormGroup
  departments:string[]
  ngOnChanges() {
    if(this.employee)
    {
      console.log(this.employee)
      this.empForm.patchValue(this.employee)
    }
  }
  get fun()
  {
    return this.empForm.controls
  }
  newAddress()
  {
    this.empFormPresenter.addAddress()
  }
  onSubmit()
  {
    this.createEvent.emit(this.empForm.value)
  }

  ngOnInit() {
  }
}
