import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';

@Injectable()
export class OnlyAuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['sign-in']);
      return true;
    }
    return true;
  }
}
