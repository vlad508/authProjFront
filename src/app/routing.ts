import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { OnlyNotAuthGuardService } from './guards/not-auth.guard';
import { OnlyAuthGuardService } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'sign-in', component: AuthComponent, canActivate: [OnlyNotAuthGuardService]},
  {path: 'home', component: HomeComponent, canActivate: [OnlyAuthGuardService]},
  {path: 'register', component: RegisterComponent, canActivate: [OnlyNotAuthGuardService]},

  { path: '**', redirectTo: '' }
];

export const AppRoutes = RouterModule.forRoot(routes,
  { initialNavigation: 'enabled' });
