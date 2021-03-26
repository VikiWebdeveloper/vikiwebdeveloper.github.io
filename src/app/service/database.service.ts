import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(public fireService: AngularFirestore) { }
  addNoteToBase(note){
    return this.fireService.collection('Notes').add(note);
  }
}
