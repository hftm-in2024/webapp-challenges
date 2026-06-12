import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card" style="max-width: 400px; margin: 2rem auto;">
      <h2>Login</h2>
      <br>
      @if (error()) {
        <div class="alert alert-error">{{ error() }}</div>
      }
      <form (ngSubmit)="onLogin()">
        <label>
          Benutzername
          <input type="text" [(ngModel)]="username" name="username" required>
        </label>
        <label>
          Passwort
          <input type="password" [(ngModel)]="password" name="password" required>
        </label>
        <button type="submit" class="btn btn-primary" style="width: 100%">
          Anmelden
        </button>
      </form>
      <p style="margin-top: 1rem; font-size: 0.85rem; color: #666;">
        Hinweis: Verwende <code>admin</code> / <code>admin123</code>
      </p>
    </div>
  `,
})
export class LoginComponent {
  private auth = inject(AuthService);
  private route = inject(ActivatedRoute);

  username = '';
  password = '';
  error = signal('');

  onLogin() {
    if (this.auth.login(this.username, this.password)) {
      // After login, redirect to the returnUrl if present
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      if (returnUrl) {
        window.location.href = returnUrl;
      } else {
        window.location.href = '/notes';
      }
    } else {
      this.error.set('Ungültiger Benutzername oder Passwort.');
    }
  }
}
