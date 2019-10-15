import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {

  private memberLoginDetails: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  loginClick(userName:string, password:String)
  {
    console.log(userName);
    console.log(password);
    console.log(this.memberLoginDetails);
  }

}
