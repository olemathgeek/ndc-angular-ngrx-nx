import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers(country: string = null) {
    const url = country !== null
      ? `http://localhost:3000/users?country=${country}`
      : `http://localhost:3000/users`;

    return this.httpClient.get(url);
  }
}
