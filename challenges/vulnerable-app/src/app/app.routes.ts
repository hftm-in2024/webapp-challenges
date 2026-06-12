import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes.component';
import { NoteDetailComponent } from './components/note-detail.component';
import { LoginComponent } from './components/login.component';
import { AdminComponent } from './components/admin.component';
import { ProfileComponent } from './components/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/:id', component: NoteDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'notes' },
];
