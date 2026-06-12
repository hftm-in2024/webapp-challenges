import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (auth.isAuthenticated()) {
      <h1>Mein Profil</h1>
      <br>

      <div class="card">
        <h3>Benutzerdaten</h3>
        <p><strong>Benutzername:</strong> {{ user()?.username }}</p>
        <p><strong>Rolle:</strong> {{ user()?.role }}</p>
      </div>

      <div class="card">
        <h3>Profil teilen</h3>
        <p style="color: #666; margin-bottom: 1rem;">
          Erstelle einen Link, um dein Profil mit anderen zu teilen.
        </p>
        <label>
          Dein Anzeigename für den Share-Link
          <input
            type="text"
            [(ngModel)]="displayName"
            name="displayName"
            placeholder="Dein Name"
          >
        </label>
        <button class="btn btn-primary" (click)="generateShareLink()">
          Share-Link erstellen
        </button>

        @if (shareLink()) {
          <div class="alert alert-success" style="margin-top: 1rem;">
            <strong>Dein Share-Link:</strong><br>
            <a [href]="shareLink()">{{ shareLinkDisplay() }}</a>
          </div>
        }
      </div>

      <div class="card">
        <h3>Konto löschen</h3>
        <p style="color: #666; margin-bottom: 1rem;">
          Achtung: Diese Aktion kann nicht rückgängig gemacht werden.
        </p>
        <button class="btn btn-danger" (click)="deleteAccount()">
          Konto unwiderruflich löschen
        </button>
      </div>
    } @else {
      <div class="alert alert-error">
        Du musst angemeldet sein, um dein Profil zu sehen.
        <a routerLink="/login">Zur Anmeldung</a>
      </div>
    }
  `,
})
export class ProfileComponent {
  auth = inject(AuthService);
  private sanitizer = inject(DomSanitizer);

  user = signal(this.auth.getUser());
  displayName = '';
  shareLink = signal<SafeUrl | null>(null);
  shareLinkDisplay = signal('');

  generateShareLink() {
    if (!this.displayName.trim()) return;

    const url = `javascript:alert('Profil von: ${this.displayName}')`;
    this.shareLink.set(this.sanitizer.bypassSecurityTrustUrl(url));
    this.shareLinkDisplay.set(`securenotes.app/profile/share?name=${this.displayName}`);
  }

  deleteAccount() {
    if (confirm('Bist du sicher? Diese Aktion kann nicht rückgängig gemacht werden!')) {
      this.auth.logout();
    }
  }
}
