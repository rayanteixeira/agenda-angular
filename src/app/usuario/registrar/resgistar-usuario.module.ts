import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarUsuarioComponent } from './registrar-usuario.component';
import { RegistrarUsuarioService } from './registrar-usuario.service';
import { RegistrarUsuarioRoute } from './registrar-usuario.route';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RegistrarUsuarioRoute,
    AlertModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    RegistrarUsuarioComponent
  ],
  providers: [
    RegistrarUsuarioService
  ]
})
export class RegistrarUsuarioModule { }
