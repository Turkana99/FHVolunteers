import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated: boolean = false;
  login(username: string, password: string): boolean {
    this.isAuthenticated =  username === 'mmmmadova.turkana@gmail.com' && password === '123';
    return this.isAuthenticated;
  }

  logout(): void {
    // Çıxış etdikdə loggedIn dəyərini false etmək üçün metod
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    // İstifadəçinin giriş edib-edilmədiyini yoxlamaq üçün metod
    return this.isAuthenticated;
  }
}
