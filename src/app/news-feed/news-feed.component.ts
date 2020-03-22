import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {TrackerService} from '../tracker.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})


export class NewsFeedComponent implements OnInit {

newList: any;
  constructor(private router: Router, private route: ActivatedRoute, private tracker: TrackerService) {
    console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit() {
  this.newList = history.state;
  }

}
