import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-settings',
  imports: [
    FormsModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  template: `
    <h1>Einstellungen</h1>
    <mat-card style="max-width: 500px">
      <mat-card-content>
        <h3>Benachrichtigungen</h3>
        <mat-slide-toggle [(ngModel)]="emailNotifications">
          E-Mail-Benachrichtigungen
        </mat-slide-toggle>
        <br /><br />
        <mat-slide-toggle [(ngModel)]="pushNotifications">
          Push-Benachrichtigungen
        </mat-slide-toggle>

        <mat-divider style="margin: 24px 0" />

        <h3>Darstellung</h3>
        <mat-form-field style="width: 100%">
          <mat-label>Sprache</mat-label>
          <mat-select [(ngModel)]="language">
            <mat-option value="de">Deutsch</mat-option>
            <mat-option value="en">English</mat-option>
            <mat-option value="fr">Français</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field style="width: 100%">
          <mat-label>Events pro Seite</mat-label>
          <mat-select [(ngModel)]="pageSize">
            <mat-option [value]="10">10</mat-option>
            <mat-option [value]="25">25</mat-option>
            <mat-option [value]="50">50</mat-option>
          </mat-select>
        </mat-form-field>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary">
          <mat-icon>save</mat-icon> Speichern
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class SettingsComponent {
  emailNotifications = true;
  pushNotifications = false;
  language = 'de';
  pageSize = 10;
}
