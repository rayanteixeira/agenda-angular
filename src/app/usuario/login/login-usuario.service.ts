import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Usuario } from '../usuario.model';

import { ConstURL } from '../../config/const-url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginUsuarioService {

  private resourceUrl = ConstURL.CONST_URL;
  private headers: Headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private http: Http) { }

  create(usuarioForm): Observable<Usuario> {
    return this.http
      .post(`${this.resourceUrl}/registrar`, usuarioForm, { headers: this.headers })
      .map((res: Response) => {
        const response = res.json() as Usuario;
        return response;
      });
  }

  login(usuario): Observable<Usuario> {
    return this.http
      .post(`${this.resourceUrl}/login`, usuario, { headers: this.headers })
      .map((res: Response) => {
        const response = res.json() as Usuario;
        if (response.id !== null) {
            localStorage.setItem('user', JSON.stringify(response));
        }
        return response;
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('Erro ao solicitar: Status:  ', error.status); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
