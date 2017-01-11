import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppBarComponent } from './components/ui/app-bar/app-bar.component';
import { MainContainerComponent } from './components/containers/main-container/main-container.component';
import { NotesContainerComponent } from './components/containers/notes-container/notes-container.component';
import { NoteCreatorComponent } from './components/ui/note-creator/note-creator.component';
import { NoteCardComponent } from './components/ui/note-card/note-card.component';
import { ColorPickerComponent } from './components/ui/color-picker/color-picker.component';

import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainContainerComponent,
    NotesContainerComponent,
    NoteCreatorComponent,
    NoteCardComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
