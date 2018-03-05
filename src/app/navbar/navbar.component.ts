import { Component } from '@angular/core';
import { Usuario } from '../usuario/usuario.model';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  title = 'app';
  usuarioLogado: Usuario;
  botaoSair: Boolean;
  local: any;
  constructor(private router: Router) {
    this.usuarioLogado = JSON.parse(localStorage.getItem('user'));
    if ( this.usuarioLogado !== null) {
      this.botaoSair = true;
    }else {
      this.botaoSair = false;
    }
  }
  ngOnInit() {
  }

  sair() {
    this.local = localStorage.removeItem('user');
    if (this.local !== null) {
      this.botaoSair = false;
      this.router.navigate(['/']);
    }


  }
}

