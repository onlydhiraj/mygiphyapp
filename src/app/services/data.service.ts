import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  api_key = 'p4yPl47mBiSms0ypqlRB5b46lEboO4SS';
  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?
    &apiKey=${this.api_key}&limit=50`)
      // return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  searchgifs(gifName: string) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.api_key}&q=${gifName}&limit=10`)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
