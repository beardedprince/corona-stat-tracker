import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  post: any[];
    constructor(private http: HttpClient) { }

    getList() {
     return this.http.get('https://api.coronatracker.com/v2/analytics/country');
    }


    getNews() {
      const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
      return this.http.get('https://api.coronatracker.com/news/trending');
    }

    getGlobalStat() {
      return this.http.get('https://api.coronatracker.com/v3/stats/worldometer/global');
    }

    // getNewsByID(title: string) {
    //   this.getNews().subscribe(data => {
    //     this.post = data['items'];
    //   });
    //   return this.post.find(post => post.title === title);
    // }
}
