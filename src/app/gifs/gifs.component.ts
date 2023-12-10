import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {

  gifs: any[] =[];
  subscription: Subscription = new Subscription;

  // POSTS:any;
  pageNumber:number=1;



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription =this.dataService.getGifs()
    .subscribe((response:any)=>{
      this.gifs = response; 
      // console.log('Data',response); 
    })
    
      // console.log('Data',response); 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 
}
