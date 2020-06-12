import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../api/api.service';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from 'angularx-social-login';
import { AuthenticationService } from '../api/authentication.service';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthenticationService,
  ]
})
export class AuthModule {
}
