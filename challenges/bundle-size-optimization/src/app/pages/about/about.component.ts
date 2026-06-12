import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-about',
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatMenuModule,
  ],
  template: `
    <h1>Über EventHub</h1>
    <mat-card style="max-width: 600px">
      <mat-card-content>
        <p>
          <strong>EventHub</strong> ist eine Event-Management-App für Tech-Communities
          in der Schweiz. Organisiere Konferenzen, Workshops und Meetups an einem Ort.
        </p>

        <h3>Features</h3>
        <mat-list>
          <mat-list-item>
            <mat-icon matListItemIcon>event</mat-icon>
            <span matListItemTitle>Event-Verwaltung</span>
            <span matListItemLine>Erstelle und verwalte Events</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListItemIcon>bar_chart</mat-icon>
            <span matListItemTitle>Dashboard</span>
            <span matListItemLine>Statistiken und Reports</span>
          </mat-list-item>
          <mat-list-item>
            <mat-icon matListItemIcon>download</mat-icon>
            <span matListItemTitle>Export</span>
            <span matListItemLine>CSV- und JSON-Export</span>
          </mat-list-item>
        </mat-list>

        <h3>Version</h3>
        <p>v1.0.0 — Built with Angular & Material</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class AboutComponent {}
