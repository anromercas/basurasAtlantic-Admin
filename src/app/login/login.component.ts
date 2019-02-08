import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  recuerdame = false;

  constructor( public _loginService: LoginService,
                public router: Router ) { }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }
  }

  login( forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }
    this._loginService.loginEmailUser( forma.value.email, forma.value.pass, forma.value.recuerdame )
                      .then( (res: any) => {
                        console.log(res.user);
                        // redireccionar al dashboard
                        this.router.navigate(['/dashboard']);
                      }).catch( err => console.log('ERROR ' + err));
  }


}
