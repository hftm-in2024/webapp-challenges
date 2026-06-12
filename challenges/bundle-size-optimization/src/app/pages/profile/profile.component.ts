import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-profile',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
  template: `
    <h1>Mein Profil</h1>
    <mat-card style="max-width: 500px">
      <mat-card-header>
        <mat-icon mat-card-avatar style="font-size: 40px; width: 40px; height: 40px">account_circle</mat-icon>
        <mat-card-title>Max Muster</mat-card-title>
        <mat-card-subtitle>max.muster&#64;example.ch</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <h3>Interessen</h3>
        <mat-chip-set>
          <mat-chip>Angular</mat-chip>
          <mat-chip>TypeScript</mat-chip>
          <mat-chip>Web Security</mat-chip>
          <mat-chip>DevOps</mat-chip>
        </mat-chip-set>

        <h3 style="margin-top: 16px">Statistiken</h3>
        <p><mat-icon style="vertical-align: middle">event</mat-icon> 12 besuchte Events</p>
        <p><mat-icon style="vertical-align: middle">star</mat-icon> 3 organisierte Events</p>
        <p><mat-icon style="vertical-align: middle">calendar_today</mat-icon> Mitglied seit 2024</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>
          <mat-icon>edit</mat-icon> Profil bearbeiten
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class ProfileComponent {}
