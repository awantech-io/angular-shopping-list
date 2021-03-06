import { Component, OnInit } from '@angular/core';
import { List } from '../../models/List';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  lists:List[];

  constructor() { }

  ngOnInit(): void {
    this.lists = [
      {
        id:1,
        title: 'item one',
        completed:true
      },
      {
        id:2,
        title: 'item two',
        completed:false
      },
      {
        id:1,
        title: 'item three',
        completed:false
      }
    ]
  }

}
