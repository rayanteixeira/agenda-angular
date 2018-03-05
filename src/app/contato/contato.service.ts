import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConstURL } from '../config/const-url';
import { Contato } from './contato.model';

@Injectable()
export class ContatoService {

  private resourceUrl = ConstURL.CONST_URL;
  private headers: Headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  getAll(): Observable<Response> {
    return this.http
      .get(`${this.resourceUrl}/contatos`, { headers: this.headers })
      .map((res: Response) => {
        return res;
      });
  }

  get(idContato: number): Observable<Contato> {
    return this.http
      .get(`${this.resourceUrl}/atualizar-contato/${idContato}`, { headers: this.headers })
      .map((res: Response) => {
        const response = res.json() as Contato;
        return response;
      });
  }

  remove(idContato: number): Observable<Contato> {
    return this.http
      .get(`${this.resourceUrl}/remover-contato/${idContato}`, { headers: this.headers })
      .map((res: Response) => {
        const response = res.json() as Contato;
        return response;
      });
  }

  create(contatoForm): Observable<Boolean> {
    return this.http
    .post(`${this.resourceUrl}/novo-contato`, contatoForm, { headers: this.headers })
    .map((res: Response) => {
      const response = res.json() as Boolean;
      return response;
    });
  }



}
