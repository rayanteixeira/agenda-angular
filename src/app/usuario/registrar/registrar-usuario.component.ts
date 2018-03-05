import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { LoginUsuarioService } from '../login/login-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute, private usuarioService: LoginUsuarioService, private router: Router) { }


  alertError: Boolean;
  alertSuccess: Boolean;
  idUsuario: number;
  titulo: string;


  usuario: Usuario;
  ngOnInit() {
    this.usuario = new Usuario();
    this.checkParams();
  }

  checkParams() {
    this.activatedRoute.params.forEach((params: Params) => {
        this.idUsuario = +params['id'];
        if (this.idUsuario) {
            this.titulo = 'editar usuario';
            this.carregarUsuario(this.idUsuario);
        }else {
          this.titulo = 'novo usuario';
        }
    });
  }
  salvarUsuario(usuarioForm: NgForm) {
    this.alertError = false;
    this.alertSuccess = false;
    this.usuario = usuarioForm.value;
    // this.contato.usuario = this.usuario;
    this.usuarioService.create(this.usuario)
      .subscribe((res) => {
        if (res.id !== null)  {
          this.alertSuccess = true;
          usuarioForm.resetForm();
          this.router.navigate(['/']);
        }else {
          this.alertError = true;
        }
    });
  }
  carregarUsuario(idUsuario){

  }
}
