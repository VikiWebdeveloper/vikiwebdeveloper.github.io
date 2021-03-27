import { DatabaseService } from './service/database.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  desc: string;
  priority: string;
  remindDate : Date;
  constructor(public fbService: DatabaseService){

  }
  addNote(){
    let noteDetails  ={};
    noteDetails['title'] = this.title;
    noteDetails['desc'] = this.desc;
    noteDetails['priority'] = this.priority;
    noteDetails['created'] = new Date();
    console.log(noteDetails)
    this.fbService.addNoteToBase(noteDetails).then(res => {
      console.log(res);
    })
  }
}
