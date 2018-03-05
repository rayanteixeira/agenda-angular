import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarUsuarioModule } from './usuario/registrar/resgistar-usuario.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoute } from './app.route';
import { HttpModule} from '@angular/http';
import { LoginUsuarioModule } from './usuario/login/login-usuario.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContatoModule } from './contato/contato.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginUsuarioComponent } from './usuario/login/login-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoute,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    RegistrarUsuarioModule,
    LoginUsuarioModule,
    ContatoModule

  ],
  providers: [LoginUsuarioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
