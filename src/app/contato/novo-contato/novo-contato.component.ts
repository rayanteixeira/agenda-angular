import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contato } from '../contato.model';
import { Usuario } from '../../usuario/usuario.model';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.css']
})
export class NovoContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.titulo = 'Cadastrar novo contato';
  }

  alertError: Boolean;
  alertSuccess: Boolean;
  idContato: number;
  titulo: string;

  contato: Contato;
  usuario: Usuario;
  ngOnInit() {
    this.checkParams();
    this.contato = new Contato();
    this.usuario = JSON.parse(localStorage.getItem('user'));
  }

  checkParams() {
    this.activatedRoute.params.forEach((params: Params) => {
        this.idContato = +params['id'];
        if (this.idContato) {
            this.titulo = 'editar contato';
            this.carregarContato(this.idContato);
        }else {
          this.titulo = 'novo contato';
        }
    });
}

  salvarContato(contatoForm: NgForm) {
    this.alertError = false;
    this.alertSuccess = false;
    this.contato = contatoForm.value;
    this.contato.usuario = this.usuario;
    this.contatoService.create(this.contato)
      .subscribe((res) => {
        if (res)  {
          this.alertSuccess = true;
          contatoForm.resetForm();
          // this.router.navigate(['/contatos']);
        }else {
          this.alertError = true;
        }
    });
  }

  carregarContato(idContato) {
    this.contato = new Contato();
    this.contatoService.get(idContato)
    .subscribe((res) => {
      this.contato = res;
      console.log(this.contato);
    });
  }

}
