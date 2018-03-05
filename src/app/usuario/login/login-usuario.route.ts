import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginUsuarioComponent } from './login-usuario.component';

const LOGIN_ROUTE: Routes = [
  { path: 'login' , component: LoginUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(LOGIN_ROUTE)],
  exports: [RouterModule]
})
export class LoginUsuarioRoute { }
