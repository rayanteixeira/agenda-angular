import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsuarioRoute } from './login-usuario.route';
import { LoginUsuarioComponent } from './login-usuario.component';
import { LoginUsuarioService } from './login-usuario.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert/alert.module';


@NgModule({
  imports: [
    CommonModule,
    LoginUsuarioRoute,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  declarations: [
    LoginUsuarioComponent
  ],
  providers: [
    LoginUsuarioService
  ]
})
export class LoginUsuarioModule { }
