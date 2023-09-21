import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: 'grid',
    loadChildren: ()=>import('./grid/grid-routing.module').then((m) => m.GridRoutingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: ()=>import('./login/login-routing.module').then((m)=>m.GridRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
