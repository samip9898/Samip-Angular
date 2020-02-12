import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPresentationComponent } from './Employee-Form-Container/form-container/form-presentation/form-presentation';


const routes: Routes = [
  {
    path : 'form' , component:FormPresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
