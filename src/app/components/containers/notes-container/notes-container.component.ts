import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: ' notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  constructor(private _notesService: NotesService) {

  }

  ngOnInit() {
    this.getNotes();
  }

  notes = [];

  getNotes() {
    this._notesService
      .getNotes()
      .then(notes => {
        this.notes = notes
      });
  }


  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {

    var newNote = {
      id : this.notes[this.notes.length -1].id +1,
      title : note.title,
      value: note.value
    }


    this._notesService
      .create(note)
      .then(note => {
        this.notes.push(newNote);
      });
  }
}
