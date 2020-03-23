import { Component, OnInit, Input } from '@angular/core';
import {TrackerService} from '../tracker.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trackerList: object;
  globalStat: object;
  newList: object;
  title: string;
 public product = [{ id: '1', name: 'Angular'}];
  constructor( private tracker: TrackerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.tracker.getList().subscribe((result: any) => {
      this.trackerList = result;
      console.log(this.trackerList);
    });

    this.tracker.getNews().subscribe( data => {
      this.newList = data;
      console.log(data.hasOwnProperty.length);
    });

    this.tracker.getGlobalStat().subscribe( data => {
      this.globalStat = data;
      console.log(data);
      
    });
    // this.tracker.getNewsByID(this.title).subscribe( id => {
    //   this.route.params.subscribe(params => {
    //     console.log(params);
    //   });
    //   console.log('number id', id);
    // });
  }

  // gotoFeed() {
  //   this.router.navigateByUrl('/news', { state: this.newList });
  //   console.log(this.newList);
  // }

}
