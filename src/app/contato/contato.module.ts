import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoute } from './contato.route';
import { ContatoService } from './contato.service';
import { ContatoComponent } from './contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { AlertModule } from 'ngx-bootstrap/alert/alert.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoute,
    AlertModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ContatoComponent,
    NovoContatoComponent
  ],
  providers: [
    ContatoService
  ]
})
export class ContatoModule { }
