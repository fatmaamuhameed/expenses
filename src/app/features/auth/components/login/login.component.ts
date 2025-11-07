import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private _http = inject(HttpClient);
  private _router = inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    this._http.get<any[]>('https://690d1d17a6d92d83e850851e.mockapi.io/api/v1/users').subscribe({
      next: (res) => {
        const { email, password } = this.loginForm.value;
        const user = res.find((u) => u.email === email && u.password === password);
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user));
          this._router.navigate(['/dashboard']);
        } else {
        }
      },
      error: (err) => {},
    });
  }
}
