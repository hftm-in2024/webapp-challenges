import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { EVENTS, calculateStats } from '../../data/mock-data';
import { StatsWidgetComponent } from './stats-widget.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    StatsWidgetComponent,
  ],
  template: `
    <h1>Dashboard</h1>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px">
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>event</mat-icon>
          <mat-card-title>{{ stats.totalEvents }}</mat-card-title>
          <mat-card-subtitle>Events total</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>people</mat-icon>
          <mat-card-title>{{ stats.totalAttendees }}</mat-card-title>
          <mat-card-subtitle>Teilnehmer total</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
      <mat-card>
        <mat-card-header>
          <mat-icon mat-card-avatar>payments</mat-icon>
          <mat-card-title>CHF {{ stats.averagePrice }}</mat-card-title>
          <mat-card-subtitle>Durchschnittspreis</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
    </div>

    <mat-divider />

    <app-stats-widget [stats]="stats" />
  `,
})
export class DashboardComponent {
  stats = calculateStats(EVENTS);
}
