import { DatabaseService } from './service/database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notes';
  note: string;
  remindDate : Date;
  constructor(public fbService: DatabaseService){

  }
  addNote(){
    let noteDetails  ={};
    noteDetails['note'] = this.note;
    noteDetails['date'] = this.remindDate;
    console.log(noteDetails)
    this.fbService.addNoteToBase(noteDetails).then(res => {
      console.log(res);
    })
  }
}
