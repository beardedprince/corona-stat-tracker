import { Component, OnInit } from '@angular/core';
import {TrackerService} from '../tracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trackerList: object;
  newList: object;
  constructor( private tracker: TrackerService) { }

  ngOnInit() {
    this.tracker.getList().subscribe((result: any) => {
      this.trackerList = result;
      console.log(this.trackerList);
    });

    this.tracker.getNews().subscribe( data => {
      this.newList = data;
      console.log('hey', this.newList);
    });
  }

}
