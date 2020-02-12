import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmployeesRoutingModule } from './employees-routing.module';
import { FormContainerComponent } from './Employee-Form-Container/form-container/form-container';
import { ListContainerComponent } from './Employee-Form-Container/list-container/list-container';
import { FormPresentationComponent } from './Employee-Form-Container/form-container/form-presentation/form-presentation';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListPresentationComponent } from './Employee-Form-Container/list-container/list-presentation/list-presentation';




@NgModule({
  declarations: [FormContainerComponent, ListContainerComponent, FormPresentationComponent, ListPresentationComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
})
export class EmployeesModule { }
