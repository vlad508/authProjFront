import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterModule } from './auth/register/register.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routing';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { OnlyAuthGuardService } from './guards/auth.guard';
import { OnlyNotAuthGuardService } from './guards/not-auth.guard';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';

import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.GOOGLE_AUTH),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.FACEBOOK_AUTH)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    RouterModule,
    AuthModule,
    AppRoutes,
    HttpClientModule,
    HomeModule,
  ],
  providers: [
    CookieService,
    OnlyAuthGuardService,
    OnlyNotAuthGuardService,
     {
        provide: AuthServiceConfig,
        useFactory: provideConfig,
     },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
