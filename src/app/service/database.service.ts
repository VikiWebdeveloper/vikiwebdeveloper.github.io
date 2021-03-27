import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Note } from '../Notes';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  dbNotes: Observable<Note[]>;
  constructor(public fireService: AngularFirestore) {
    this.dbNotes = this.fireService.collection('Notes').valueChanges();
  }
  addNoteToBase(note){
    return this.fireService.collection('Notes').add(note);
  }
  getItems(){
    return this.dbNotes;
  }
}
