import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListContainer} from './Employee-Form-Container/list-container/list-container';
import { FormContainer } from './Employee-Form-Container/form-container/form-container';

import { FormPresentation } from './Employee-Form-Container/form-container/form-presentation/form-presentation';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:'',
   component:ListContainer 
  },
  {
    path : 'form' , 
    component:FormContainer
  },
  {
     path :'form-container/:id',
     component:FormContainer

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
