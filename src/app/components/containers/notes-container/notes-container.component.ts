import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: ' notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit, OnDestroy {


  notes = [];


  constructor(
    private _notesService: NotesService) {

  }

  ngOnInit() {
    this.getNotes();
  }


  ngOnDestroy() {
    console.log('destroyed');

  }


  getNotes() {
    this._notesService
      .getNotes()
      .then(notes => {
        this.notes = notes
      });
  }


  onNoteChecked(note, i) {
    this._notesService
      .delete(note.id)
      .then(() => {
        this.notes = this.notes.filter(n => n !== note);
      })
  }

  onCreateNote(note) {

    var newNote = {
      id: this.notes[this.notes.length - 1].id + 1,
      title: note.title,
      value: note.value
    }


    this._notesService
      .create(note)
      .then(note => {
        this.notes.push(newNote);
      });
  }
}
