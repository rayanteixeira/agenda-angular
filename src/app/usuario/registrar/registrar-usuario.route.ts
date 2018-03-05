import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarUsuarioComponent } from './registrar-usuario.component';

export const REGISTRAR_ROUTES: Routes = [
  { path: 'registrar', component: RegistrarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(REGISTRAR_ROUTES)],
  exports: [RouterModule]
})
export class RegistrarUsuarioRoute { }
