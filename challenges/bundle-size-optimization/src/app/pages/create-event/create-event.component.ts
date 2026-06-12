import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-create-event',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatAutocompleteModule,
  ],
  template: `
    <h1>Neues Event erstellen</h1>
    <mat-card style="max-width: 600px">
      <mat-card-content>
        <form style="display: flex; flex-direction: column; gap: 16px">
          <mat-form-field>
            <mat-label>Titel</mat-label>
            <input matInput [(ngModel)]="title" name="title" placeholder="z.B. Angular Workshop" />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Beschreibung</mat-label>
            <textarea matInput [(ngModel)]="description" name="description" rows="3"></textarea>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Datum</mat-label>
            <input matInput [matDatepicker]="picker" [(ngModel)]="date" name="date" />
            <mat-datepicker-toggle matIconSuffix [for]="picker" />
            <mat-datepicker #picker />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Ort</mat-label>
            <input matInput [(ngModel)]="location" name="location" />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Kategorie</mat-label>
            <mat-select [(ngModel)]="category" name="category">
              <mat-option value="conference">Konferenz</mat-option>
              <mat-option value="workshop">Workshop</mat-option>
              <mat-option value="meetup">Meetup</mat-option>
              <mat-option value="webinar">Webinar</mat-option>
            </mat-select>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Max. Teilnehmer</mat-label>
            <input matInput type="number" [(ngModel)]="maxAttendees" name="maxAttendees" />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Preis (CHF)</mat-label>
            <input matInput type="number" [(ngModel)]="price" name="price" />
            <span matTextSuffix>CHF</span>
          </mat-form-field>
        </form>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary">
          <mat-icon>save</mat-icon> Speichern
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class CreateEventComponent {
  title = '';
  description = '';
  date: Date | null = null;
  location = '';
  category = '';
  maxAttendees = 50;
  price = 0;
}
