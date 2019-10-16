import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserSignupModel } from 'src/api/model/userSignupModel';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
     private fb: FormBuilder,
     private loginHandler:LoginService) { }

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
      this.loginHandler.registerAccount(user);
    }
  }
}
