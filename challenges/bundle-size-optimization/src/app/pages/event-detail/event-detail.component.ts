import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EVENTS } from '../../data/mock-data';

@Component({
  selector: 'app-event-detail',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
    MatSnackBarModule,
    UpperCasePipe,
  ],
  template: `
    @if (event(); as evt) {
      <mat-card style="max-width: 700px">
        <img mat-card-image [src]="evt.imageUrl" [alt]="evt.title" />
        <mat-card-header>
          <mat-card-title>{{ evt.title }}</mat-card-title>
          <mat-card-subtitle>{{ evt.category | uppercase }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>{{ evt.description }}</p>
          <mat-divider />
          <div style="margin-top: 16px">
            <p><mat-icon style="vertical-align: middle">calendar_today</mat-icon> {{ evt.date }}</p>
            <p><mat-icon style="vertical-align: middle">location_on</mat-icon> {{ evt.location }}</p>
            <p><mat-icon style="vertical-align: middle">people</mat-icon> {{ evt.attendees }} / {{ evt.maxAttendees }} Teilnehmer</p>
            <p><mat-icon style="vertical-align: middle">payments</mat-icon>
              @if (evt.price === 0) { Gratis } @else { CHF {{ evt.price }} }
            </p>
          </div>
          <p style="margin-top: 8px; font-size: 0.9em; color: #666">Auslastung:</p>
          <mat-progress-bar mode="determinate" [value]="(evt.attendees / evt.maxAttendees) * 100" />
        </mat-card-content>
        <mat-card-actions>
          <a mat-button routerLink="/">
            <mat-icon>arrow_back</mat-icon> Zurück
          </a>
          <button mat-raised-button color="primary">
            <mat-icon>how_to_reg</mat-icon> Anmelden
          </button>
        </mat-card-actions>
      </mat-card>
    } @else {
      <p>Event nicht gefunden.</p>
      <a mat-button routerLink="/">Zurück zur Übersicht</a>
    }
  `,
})
export class EventDetailComponent {
  id = input.required<string>();
  event = computed(() => EVENTS.find(e => e.id === +this.id()));
}
