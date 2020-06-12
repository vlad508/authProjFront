import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../api/authentication.service';

@Injectable()
export class OnlyNotAuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return true;
    }
  }
}
