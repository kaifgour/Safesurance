import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/user/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'https://localhost:44397/api/user/login';
  constructor(private http: HttpClient) {}

  login(loginDetails: Login) {
    return this.http.post(this.url, loginDetails);
  }

  checkLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
