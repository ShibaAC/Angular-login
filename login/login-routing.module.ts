import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: ()=>import('./forms/forms-routing.module').then((m)=>m.formsRoutingModule)
  },
  {
    path: '',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
