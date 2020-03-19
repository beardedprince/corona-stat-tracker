import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {

    constructor(private http: HttpClient) { }

    getList() {
     return this.http.get('https://api.coronatracker.com/v2/analytics/country');
    }


    getNews() {
      const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*'});
      return this.http.get('http://api.coronatracker.com/news/trending');
    }
}
