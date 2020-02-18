import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormPresenter } from '../form-presenter/form-presenter';
import { Employee } from 'src/app/employees/employees.model';

import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form-presentation',
  templateUrl: './form-presentation.html',
  styleUrls: ['./form-presentation.scss'],
  providers: [FormPresenter]
})
export class FormPresentation implements OnChanges {
  public empForm: FormGroup
  public departments: string[]
  @Input() employee: Employee;
  @Output() create = new EventEmitter<Employee>()

  constructor(private empFormPresenter: FormPresenter) {
    this.empForm = this.empFormPresenter.createEmployeeForm()
    this.departments = this.empFormPresenter.departments
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.employee) {
      console.log(this.employee)
      this.empForm.patchValue(this.employee)
    }
  }
  get fun(){
    return this.empForm.controls
  }
  newAddress() {
    this.empFormPresenter.addAddress()
  }
  onSubmit() {
    this.create.emit(this.empForm.value)
  }
  clearAddress(index: number): void {
    this.empFormPresenter.removeGroup(index)
  }


}
