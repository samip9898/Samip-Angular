import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmployeesRoutingModule } from './employees-routing.module';
import { FormContainer } from './Employee-Form-Container/form-container/form-container';
import { ListContainer } from './Employee-Form-Container/list-container/list-container';
import { FormPresentation } from './Employee-Form-Container/form-container/form-presentation/form-presentation';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListPresentation } from './Employee-Form-Container/list-container/list-presentation/list-presentation';
import { EmployeeCrudService } from './employee-crud.service';




@NgModule({
  declarations: [FormContainer, ListContainer, FormPresentation, ListPresentation],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[EmployeeCrudService]
  
})
export class EmployeesModule { }
