import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // @ViewChild('userName ', { static: false }) userName!: ElementRef;
  // @ViewChild('passWord ', { static: false }) passWord!: ElementRef;
  username: string = '';
  password: string = '';

  registerForm: FormGroup;
  formSubmitted = false;
  showPassword: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
