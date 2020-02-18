import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContainer } from './employees/Employee-Form-Container/list-container/list-container';
import { FormPresentation } from './employees/Employee-Form-Container/form-container/form-presentation/form-presentation';
import { FormContainer } from '../app/employees/Employee-Form-Container/form-container/form-container'
import { from } from 'rxjs';


const routes: Routes = [
  {
    path:"employees", loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
