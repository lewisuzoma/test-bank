import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
   <div class="login-container">
    <h2>Login</h2>
  
  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        id="email" 
        type="email" 
        formControlName="email" 
        class="form-control" 
        placeholder="Enter your email" />
      <div *ngIf="f.email.touched && f.email.invalid" class="error-message">
        <div *ngIf="f.email.errors?.['required']">Email is required.</div>
        <div *ngIf="f.email.errors?.['email']">Please enter a valid email address.</div>
      </div>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input 
        id="password" 
        type="password" 
        formControlName="password" 
        class="form-control" 
        placeholder="Enter your password" />
      <div *ngIf="f.password.touched && f.password.invalid" class="error-message">
        <div *ngIf="f.password.errors?.['required']">Password is required.</div>
        <div *ngIf="f.password.errors?.['minlength']">Password must be at least 6 characters long.</div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid">Login</button>
  </form>
</div>

  `,
  styles: `
    // General container for login
    .login-container {
      width: 300px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;

      h2 {
        text-align: center;
      }

      .form-group {
        margin-bottom: 15px;
      }

      input.form-control {
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
      }

      button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;

        &:disabled {
          background-color: #cccccc;
        }
      }

      .error-message {
        color: red;
        font-size: 12px;
      }
      
    }
    
  `
})
export class LoginFormComponent {
  @Output() public loginFormEvent = new EventEmitter<any>();
  
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });

  // Getter to easily access form controls
  get f() {
    return this.loginForm.controls;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginFormEvent.emit(this.loginForm.value)
    return;
  }
}
