// login.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('userName ', { static: false }) userName!: ElementRef;
  @ViewChild('passWord ', { static: false }) passWord!: ElementRef;
  username: string = '';
  password: string = '';

  loginForm: FormGroup;
  formSubmitted = false;
  showPassword: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.username = this.userName.nativeElement.value;
    this.password = this.passWord.nativeElement.value;
    this.authService.login(this.username, this.password);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
