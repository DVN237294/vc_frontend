import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  private memberLoginDetails: boolean = false;
  constructor(private loginHandler:LoginService) { }

  ngOnInit() {

  }

  loginClick(userName: string, pwd: string) {
    this.loginHandler.login(userName, pwd);
  }

  logout()
  {
    this.loginHandler.logout();
  }
}
