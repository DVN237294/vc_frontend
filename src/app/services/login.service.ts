import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/api/api/authentication.service';
import { ToastrService, Toast } from 'ngx-toastr';
import { UserSignupModel } from 'src/api/model/userSignupModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: AuthenticationService, private toast: ToastrService, private router: Router) { }

  login(userName: string, password: string) {
    this.userService.apiAuthenticationPost({
      userName,
      password
    }).subscribe(r => this.handleSuccessLogin(r), () => this.handleFailedLogin());
  }

  private handleSuccessLogin(result) {
    localStorage.setItem('token', result.token);
    localStorage.setItem('userName', result.userName);
    this.toast.success('Successful!', 'Login');
  }
  private handleFailedLogin() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.toast.error('Failed', 'Login');
  }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      this.toast.info('Logged out');
      this.router.navigateByUrl('/');
    }
  }

  isLoggedIn() {
    return this.getLoginToken() != null;
  }

  getLoginToken() {
    return localStorage.getItem('token');
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  registerAccount(user: UserSignupModel) {
    this.userService.apiAuthenticationRegisterPost(user).subscribe({
      next: r => {
        if (r.succeeded) {
          this.toast.success('Account created!');
        } else {
          r.errors.forEach(error => this.toast.error(error.description));
        }
      },
      error: e => this.toast.error('Connection error', e.statusText)
    });
  }
}
