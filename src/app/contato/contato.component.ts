import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContatoService } from './contato.service';
import { Contato } from './contato.model';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService, private router: Router, private modalService: BsModalService) { }

  contatos: Contato[] = [];
  modalRef: BsModalRef;
  contatoRemovido: Contato;
  alertError: boolean;
  alertSuccess: boolean;
  ngOnInit() {
    this.buscarContatos();
  }

  buscarContatos() {
  this.contatoService.getAll()
  .subscribe((res: any) => {
    const lista = JSON.parse(res._body);
    lista.forEach(contato => {
      this.contatos.push(contato);
    });
  });
  }

  novoContato() {
    this.router.navigate(['/novo-contato']);
  }

  editarContato(contato: Contato) {
    this.router.navigate(['/atualizar-contato', contato.id]);
  }

  confirmaExclusaoModal(template: TemplateRef<any>, contato: Contato) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered'});
    this.contatoRemovido = contato;
  }

  confirmaExclusao(): void {
    this.alertSuccess = false;
    this.alertError = false;
     this.contatoService.remove(this.contatoRemovido.id)
     .subscribe((res) => {
       if (res) {
          const index = this.contatos.indexOf(this.contatoRemovido);
          if (index !== -1) {
              this.contatos.splice(index, 1);
              this.alertSuccess = true;
          }
       }else {
        this.alertError = true;
      }
     });
    this.modalRef.hide();
  }

  cancelaExclusao(): void {
    this.modalRef.hide();
  }
}
