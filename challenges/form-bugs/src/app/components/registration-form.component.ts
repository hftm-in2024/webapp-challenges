import { Component, signal } from '@angular/core';
import { signalForm, signalFormField, FormsModule } from '@angular/forms/signal';
import { required, minLength, email } from '@angular/forms/signal/validators';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" [formField]="form.controls.name" placeholder="Max Muster" />
        @if (form.controls.name.touched() && !form.controls.name.valid()) {
          <span class="error">Name ist erforderlich (min. 2 Zeichen)</span>
        }
      </div>

      <div class="form-group">
        <label for="email">E-Mail</label>
        <input id="email" type="email" [formField]="form.controls.email" placeholder="max@beispiel.ch" />
        @if (form.controls.email.touched() && !form.controls.email.valid()) {
          <span class="error">Bitte gib eine gültige E-Mail-Adresse ein</span>
        }
      </div>

      <div class="form-group">
        <label for="password">Passwort</label>
        <input id="password" type="password" [formField]="form.controls.password" placeholder="Min. 8 Zeichen" />
        @if (form.controls.password.touched() && !form.controls.password.valid()) {
          <span class="error">Passwort ist erforderlich (min. 8 Zeichen)</span>
        }
      </div>

      <div class="form-group">
        <label for="age">Alter</label>
        <input id="age" type="number" [formField]="form.controls.age" placeholder="25" />
        @if (form.controls.age.touched() && !form.controls.age.valid()) {
          <span class="error">Alter ist erforderlich</span>
        }
      </div>

      <button type="submit" [disabled]="form.valid()">
        Registrieren
      </button>
    </form>

    @if (submitted()) {
      <div class="success">
        Registrierung erfolgreich!
      </div>
    }
  `,
  styles: [`
    form {
      background: white;
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 1.25rem;
    }
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.375rem;
      font-size: 0.9rem;
    }
    input {
      width: 100%;
      padding: 0.625rem 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 0.95rem;
      transition: border-color 0.15s;
    }
    input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    .error {
      display: block;
      color: #dc2626;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
    button {
      width: 100%;
      padding: 0.75rem;
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      margin-top: 0.5rem;
    }
    button:hover:not(:disabled) {
      background: #1d4ed8;
    }
    button:disabled {
      background: #93c5fd;
      cursor: not-allowed;
    }
    .success {
      margin-top: 1.5rem;
      padding: 1rem 1.5rem;
      background: #ecfdf5;
      border-radius: 8px;
      color: #065f46;
      font-weight: 600;
      text-align: center;
    }
  `]
})
export class RegistrationFormComponent {
  form = signalForm({
    name: signalFormField('', {
      validators: [required(), minLength(2)],
    }),
    email: signalFormField('', {
      validators: [required(), minLength(5)],
    }),
    password: signalFormField('', {
      validators: [required(), minLength(8)],
    }),
    age: signalFormField('', {
      validators: [required()],
    }),
  });

  submitted = signal(false);

  onSubmit() {
    if (this.form.valid()) {
      const value = this.form.value();
      console.log('Registrierung:', value);
      this.submitted.set(true);
    }
  }
}
