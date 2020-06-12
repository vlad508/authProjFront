import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api/api.service';
import { User } from '../models/user';
import { AuthenticationService } from '../api/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  error = false;
  user = new User();

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.user.email = this.form.controls.inputEmail.value;
    this.user.password = this.form.controls.password.value;
    this.signIn();
  }

  signInWithSocial(provider: string): void {
    this.auth.signInSocial(provider);
  }

  private signIn() {
    this.apiService.sigIn(this.user)
      .subscribe((resp) => {
          if (resp.result === 1) {
            this.auth.setCookies(resp);
          } else {
            this.error = true;
          }
        },
        error => console.log(error));
  }

}
