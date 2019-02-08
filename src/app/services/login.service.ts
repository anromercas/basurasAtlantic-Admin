import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;

  constructor( private afsAuth: AngularFireAuth,
                public router: Router ) {
    this.cargarStorage();
   }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage () {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }
  }

  loginEmailUser( email: string, pass: string, recordar: boolean = false ) {

    if ( recordar ) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
    return new Promise( ( resolve, reject ) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                        .then( (userData: any) => {
                          console.log(userData.user);
                          localStorage.setItem('id', userData.user.uid);
                          localStorage.setItem('token', userData.user.refreshToken);
                          this.token = userData.user.refreshToken;
                          resolve(userData);
                        },
                        err => {
                          swal('ERROR', 'El usuario o la contraseña no son correctos', 'warning');
                          reject(err);

                        });
    });
  }

  logoutUser() {
    this.token = '';
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    return this.afsAuth.auth.signOut();
  }
}
