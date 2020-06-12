import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, UserResponse } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  private baseUrl = 'http://161.35.199.210:8000/';
  httpHeaders = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json',
              Authorization: this.cookieService.get('Authorization')}
        )
  };

  public register(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}account/register/`, data, this.httpHeaders);
  }

  public sigIn(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}account/login/`, data, this.httpHeaders);
  }

  public loginService(data): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}account/social/`, data, this.httpHeaders);
  }

  public getContent(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.baseUrl}`, this.httpHeaders);
  }
}
