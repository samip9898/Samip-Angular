import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormPresenter {

  address:FormArray
  id:number
  departments:string[]=['Angular','DevOps','QA','.Net','ML','UI/UX'];
  employeeForm:FormGroup
  
  constructor(private fb:FormBuilder,private httpClient:HttpClient){}

  createEmployeeForm()
  {
    return this.employeeForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required]],
    address:this.fb.array([this.createItem()]),
    mobile:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]], 
    Department:[''],
    gender: ['male'],
    hireDate:[''],
    permanent:['']
    })
  }
  createItem(): FormGroup {
    return this.fb.group({
      city: [''],
      street: [''],
      zipCode:[''],
      state:[''],
    });
  }

addAddress()
{
    this.address = this.employeeForm.get('address') as FormArray;
    this.address.push(this.createItem())
}
}
