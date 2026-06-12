import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotesService, Note } from '../services/notes.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    @if (note()) {
      <a routerLink="/notes">&larr; Zurück zur Übersicht</a>
      <br><br>
      <div class="card">
        <h1>{{ note()!.title }}</h1>
        <p style="color: #666; font-size: 0.85rem; margin-bottom: 1rem;">
          Von {{ note()!.author }}
        </p>
        <div [innerHTML]="note()!.content"></div>
      </div>

      <div class="card">
        <h3>Kommentare ({{ note()!.comments.length }})</h3>
        @for (comment of note()!.comments; track $index) {
          <div class="comment">
            <span class="comment-author">{{ comment.author }}:</span>
            <span [innerHTML]="comment.text"></span>
          </div>
        }

        @if (auth.isAuthenticated()) {
          <hr style="margin: 1rem 0; border: none; border-top: 1px solid #eee;">
          <form (ngSubmit)="addComment()">
            <label>
              Neuer Kommentar
              <textarea [(ngModel)]="newComment" name="comment" placeholder="Schreibe einen Kommentar..." rows="3"></textarea>
            </label>
            <button type="submit" class="btn btn-primary">Kommentar hinzufügen</button>
          </form>
        } @else {
          <p style="margin-top: 1rem; color: #666;">
            <a routerLink="/login">Anmelden</a>, um zu kommentieren.
          </p>
        }
      </div>
    } @else {
      <div class="alert alert-error">Notiz nicht gefunden.</div>
    }
  `,
})
export class NoteDetailComponent {
  private route = inject(ActivatedRoute);
  private notesService = inject(NotesService);
  auth = inject(AuthService);

  note = signal<Note | undefined>(undefined);
  newComment = '';

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.note.set(this.notesService.getNote(id));
  }

  addComment() {
    const currentNote = this.note();
    if (!currentNote || !this.newComment.trim()) return;

    const user = this.auth.getUser();
    this.notesService.addComment(currentNote.id, {
      author: user?.username ?? 'Anonym',
      text: this.newComment,
    });

    // Refresh note data
    this.note.set(this.notesService.getNote(currentNote.id));
    this.newComment = '';
  }
}
