import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { MustMatch } from './helpers/must-much.validator';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../api/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();
  form: FormGroup;
  submitted = false;
  error = false;

  constructor(private apiService: ApiService,
              private cookieService: CookieService,
              private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
        Validators.pattern('\\S[0-9a-zA-Z ]{0,}'),
        Validators.maxLength(40),
        Validators.minLength(2)
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern('\\S[0-9a-zA-Z ]{0,}'),
        Validators.maxLength(40),
        Validators.minLength(2)
      ]],
      inputEmail: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      confirmLicense: [false, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.user.first_name = this.form.controls.firstName.value;
    this.user.last_name = this.form.controls.lastName.value;
    this.user.email = this.form.controls.inputEmail.value;
    this.user.password = this.form.controls.password.value;
    this.registration();
  }

  private registration() {
    this.apiService.register(this.user)
      .subscribe((data) => {
        if (data.result === 1) {
          this.auth.setCookies(data);
        } else {
          this.error = true;
        }},
        error => console.log(error));
  }

}
