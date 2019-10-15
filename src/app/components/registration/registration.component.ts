import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/service/api/authentication.service';
import { UserSignupModel } from 'src/service/model/userSignupModel';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private userService: AuthenticationService, private toast: ToastrService) { }

  registerSuccess: boolean = false;
  errorMessages: string[] = [];

  ngOnInit() {
  }

  registrationForm = this.fb.group(
    {
      UserName: ['', [Validators.required, Validators.minLength(4)]],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', Validators.required],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords }),
    }
  );

  comparePasswords(fb: FormGroup) {
    const confirmPassword = fb.get('ConfirmPassword');
    if (fb.get('Password').value !== confirmPassword.value)
      confirmPassword.setErrors({ passwordMismatch: true });
    else
      confirmPassword.setErrors(null);
  }

  register() {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      const user: UserSignupModel = {
        userName: this.registrationForm.value.UserName,
        emailAddress: this.registrationForm.value.Email,
        fullName: this.registrationForm.value.FullName,
        password: this.registrationForm.value.Passwords.ConfirmPassword
      }
      this.registerSuccess = false;
      this.errorMessages = [];
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
}
