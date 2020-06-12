import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './api.service';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {
  constructor(private cookieService: CookieService,
              private authService: AuthService,
              private apiService: ApiService,
              private router: Router) {
  }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('Authorization');
    return !!token;
  }

  signInSocial(provider: string) {
    const prov = provider === 'google' ? GoogleLoginProvider : FacebookLoginProvider;
    try {
      this.authService.signIn(prov.PROVIDER_ID)
        .then(() => {
          this.authService.authState.subscribe(user => {
            this.apiService.loginService(user).subscribe(resp => {
              if (resp.result === 1) {
                this.setCookies(resp);
              }
            }, error1 => '');
          }, error1 => '');
        });
    } catch (e) {
      console.warn(e);
    }
  }

  setCookies(response) {
    this.cookieService.set('Authorization', 'Token ' + response.token);
    this.router.navigateByUrl('home').then(() => document.location.reload());
  }

  logOut() {
    this.cookieService.delete('Authorization');
    this.router.navigateByUrl('sign-in');
  }
}
