import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';

export const CONTATO_ROUTE: Routes = [
  { path: 'contatos', component: ContatoComponent},
  { path: 'novo-contato', component: NovoContatoComponent},
  { path: 'atualizar-contato/:id', component: NovoContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(CONTATO_ROUTE)],
  exports: [RouterModule]
})
export class ContatoRoute { }
