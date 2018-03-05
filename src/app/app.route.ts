import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginUsuarioComponent } from './usuario/login/login-usuario.component';


const appRoutes: Routes = [
  { path: '', component: LoginUsuarioComponent},
  // { path: 'registrar', component: RegistrarUsuarioComponent}, // sobre
  // { path: 'about', component: AppComponent}, // sobre
  // { path: '**', component: AppComponent}, // erro

];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoute { }

