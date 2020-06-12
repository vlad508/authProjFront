import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { User } from '../models/user';
import { AuthenticationService } from '../api/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = new User();

  constructor(private apiService: ApiService,
              private cookieService: CookieService,
              private router: Router,
              private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.apiService.getContent().subscribe(
      (result) => {
        this.user = result.user;
      },
      error => {
      });
  }

  logOut() {
    this.auth.logOut();
  }
}
