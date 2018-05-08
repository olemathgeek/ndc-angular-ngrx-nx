import { Injectable } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isAuthenticated: boolean;
  user: User;

  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authenticate)
      .pipe(tap((user: User) => {
        this.isAuthenticated = true;
        this.user = user;
        localStorage.setItem('token', user.token);
      }));
  }
}
