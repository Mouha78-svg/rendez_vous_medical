import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = true;

  get userIsAthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() {}
  login() {
    this._userIsAuthenticated = true;
  }
  logout() {
    this._userIsAuthenticated = false;
  }
}
