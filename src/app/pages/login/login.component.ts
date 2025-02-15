import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginFormComponent } from "@app-shared/login-form/login-form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginFormComponent,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login(data: {email: string, password: string}) {
    console.log('Form Submitted:', data);
    // Here you would typically make an API call to authenticate the user
  }
}
