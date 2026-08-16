import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isDark = signal(false);

  constructor() {
    const saved = localStorage.getItem('theme') === 'dark';
    if (saved) {
      document.documentElement.classList.add('dark-theme');
      this.isDark.set(true);
    }
  }

  toggleTheme(): void {
    const dark = document.documentElement.classList.toggle('dark-theme');
    this.isDark.set(dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}