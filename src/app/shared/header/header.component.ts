import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  email: string;

  constructor( public _loginService: LoginService,
               ) {
                 this.email = localStorage.getItem('email');
                }

  ngOnInit() {
  }

}
