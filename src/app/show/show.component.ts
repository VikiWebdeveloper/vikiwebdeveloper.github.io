
import { DatabaseService } from './../service/database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  notes : any[];
  constructor(public fbService: DatabaseService) { 
    //fbService.list('/Notes').subscribe(Notes => {this.dbNotes = Notes; console.log(this.dbNotes)});
    // fbService.list('/Notes')
    // .valueChanges()
    // .subscribe(Notes => {
    //   this.dbNotes = Notes; 
    //   console.log(this.dbNotes)
    // });
    this.fbService.getItems().subscribe(notes => {
      this.notes = notes;
      console.log(this.notes)
    })
  }

  ngOnInit(): void { 
  }

}
