import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/api/api/authentication.service';
import { ToastrService, Toast } from 'ngx-toastr';
import { UserSignupModel } from 'src/api/model/userSignupModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: AuthenticationService, private toast:ToastrService, private router:Router) { }

  login(userName:string, password:string)
  {
    this.userService.apiAuthenticationPost({
      userName: userName,
      password: password
    }).subscribe(r => this.handleSuccessLogin(r), () => this.handleFailedLogin());
  }

  private handleSuccessLogin(result)
  {
    localStorage.setItem('token', result.token);
    localStorage.setItem('userName', result.userName);
    this.toast.success("Successful!", "Login");
    this.router.navigateByUrl('/myEnrollments');
  }
  private handleFailedLogin()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.toast.error("Failed", "Login");
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.toast.info("Logged out");
    this.router.navigateByUrl('/');
  }

  isLoggedIn()
  {
    const loggedIn = this.getLoginToken() != null;
    return loggedIn
  }

  getLoginToken()
  {
    return localStorage.getItem('token');
  }

  getUserName()
  {
    return localStorage.getItem('userName');
  }

  registerAccount(user:UserSignupModel)
  {
    this.userService.apiAuthenticationRegisterPost(user).subscribe(
      r => {
        if (r.succeeded)
          this.toast.success("Account created!");
        else
          r.errors.forEach(error => this.toast.error(error.description));
      },
      e => {
        this.toast.error("Connection error", e.statusText);
      });
  }
}
