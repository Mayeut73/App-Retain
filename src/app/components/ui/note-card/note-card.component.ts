import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

    @Input() note = {};
    //Evenement checked 
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    toggleCheck(){
      this.showCheck = !this.showCheck;
    }

    //Fire new event on click on the checkbox
    onChecked(){
      this.checked.next(this.note);
    }

  constructor() { }

  ngOnInit() {
  }

}
