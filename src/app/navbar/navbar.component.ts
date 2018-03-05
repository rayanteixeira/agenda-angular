import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/usuario.model';
import { LoginUsuarioComponent } from '../usuario/login/login-usuario.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  usuarioLogado: Usuario;
  botaoSair: Boolean = false;
  local: any;

  constructor(private router: Router, private login: LoginUsuarioComponent) {

  }

  ngOnInit() {

    this.usuarioLogado = JSON.parse(localStorage.getItem('user'));
    if (this.usuarioLogado !== null) {
      this.botaoSair = true;
    } else {
      this.botaoSair = false;
    }
  }
  sair() {
    this.local = localStorage.removeItem('user');
    if (this.local !== null) {
      this.botaoSair = false;
      this.router.navigate(['/']);
    }

  }
}
