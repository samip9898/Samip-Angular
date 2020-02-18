import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormPresenter {

  address: FormArray
  id: number
  departments: string[] = ['Angular', 'DevOps', 'QA', '.Net', 'ML', 'UI/UX', 'IOT'];
  employeeForm: FormGroup

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  createEmployeeForm() {
    return this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      address: this.fb.array([this.createItem()]),
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      Department: ['', Validators.required],
      gender: ['male'],
      hireDate: [''],
      permanent: ['']
    })
  }
  createItem(): FormGroup {
    return this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  addAddress() {
    this.address = this.employeeForm.get('address') as FormArray;
    this.address.push(this.createItem())
  }
  removeGroup(index: number):void
    {
      const control = <FormArray>this.employeeForm.controls['address'];
      control.removeAt(index);
  }
}
