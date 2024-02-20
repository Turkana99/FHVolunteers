import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: UserInterface | null = null;

  constructor(private router: Router) {
    this._restore();
  }

  private get user(): UserInterface | null {
    return this._user;
  }

  private set user(value: UserInterface | null) {
    this._user = value;

    if (value) {
      localStorage.setItem('user', JSON.stringify(value));
    } else localStorage.clear();
  }

  public get userInfo() {
    return structuredClone(this._user);
  }

  public login(username: string, password: string) {
    this.user = {
      id: 1,
      email: username,
      password,
    };

    this.router.navigate(['/volunteers-list']);
  }

  public logout() {
    this.user = null;
    this.router.navigate(['/login']);
  }

  private _restore() {
    this._user = JSON.parse(
      localStorage.getItem('user') || 'null'
    ) as UserInterface;
  }
}
