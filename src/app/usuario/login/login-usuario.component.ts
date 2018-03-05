import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LoginUsuarioService } from './login-usuario.service';
import { Usuario } from '../usuario.model';


@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginUsuarioService) { }
  email: String = '';
  password: String = '';

  error: Boolean;

  ngOnInit() {

  }

  registrar() {
    this.router.navigate(['/registrar']);
  }

  login(form: NgForm) {
    this.error = false;
    this.loginService.login(form.value)
      .subscribe((res) => {
        if (res.id !== null) {
          this.router.navigate(['/contatos']);
        } else {
          this.error = true;
        }
      });

  }
}




  // constructor(private router: Router, private formBuilder: FormBuilder) { }
  // formLogin: FormGroup;

  // email = '';
  // password = '';
  // ngOnInit() {
  //   this.login();
  // }

  // registrar() {
  //   this.router.navigate(['/registrar']);
  // }

  // login() {
  //   this.formLogin = this.formBuilder.group({
  //     email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
  //     password: new FormControl('', [Validators.minLength(4), Validators.required]),
  //   });
  // }

