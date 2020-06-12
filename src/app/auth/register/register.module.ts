import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './register.component';
import { ApiService } from '../../api/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from '../../api/authentication.service';

@NgModule({
  declarations: [
    RegisterComponent
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
    AuthenticationService
  ]
})
export class RegisterModule {
}
