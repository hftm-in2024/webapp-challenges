import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EVENTS } from '../../data/mock-data';
import { exportToCsv, downloadCsv } from '../../shared/export-utils';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
  ],
  template: `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px">
      <h1>Upcoming Events</h1>
      <button mat-raised-button (click)="onExport()">
        <mat-icon>download</mat-icon>
        CSV Export
      </button>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px">
      @for (event of events; track event.id) {
        <mat-card>
          <img mat-card-image [src]="event.imageUrl" [alt]="event.title" />
          <mat-card-header>
            <mat-card-title>{{ event.title }}</mat-card-title>
            <mat-card-subtitle>{{ event.date }} &middot; {{ event.location }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>{{ event.description }}</p>
            <mat-chip-set>
              <mat-chip>{{ event.category }}</mat-chip>
              <mat-chip>{{ event.attendees }}/{{ event.maxAttendees }} Plätze</mat-chip>
              @if (event.price === 0) {
                <mat-chip highlighted>Gratis</mat-chip>
              } @else {
                <mat-chip>CHF {{ event.price }}</mat-chip>
              }
            </mat-chip-set>
          </mat-card-content>
          <mat-card-actions>
            <a mat-button [routerLink]="['/event', event.id]">Details</a>
          </mat-card-actions>
        </mat-card>
      }
    </div>
  `,
})
export class HomeComponent {
  events = EVENTS;

  onExport(): void {
    const csv = exportToCsv(this.events);
    downloadCsv(csv, 'events.csv');
  }
}
