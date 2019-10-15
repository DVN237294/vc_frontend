import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LoginModel } from 'src/service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  private memberLoginDetails: boolean = false;
  constructor(private api: AuthenticationService) { }

  ngOnInit() {
  }

  loginClick(userName: string, pwd: string) {
    this.api.apiAuthenticationPost({
      userName: userName,
      password: pwd
    }).subscribe(result => {
        
    },
      error => {

      });
  }

}
