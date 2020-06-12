import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../api/api.service';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../api/authentication.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    ApiService,
  ]
})
export class HomeModule {
}
