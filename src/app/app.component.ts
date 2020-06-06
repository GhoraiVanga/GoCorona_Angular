import { Component, OnInit } from '@angular/core';
import { CoronaService } from './shared/corona.service';
import { Subscription, BehaviorSubject, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covoid19';
  BannerDataList: any;
  BannerData = "Be a true Indian. Show compassion. Be considerate. Help those in need. We will get through this!"
  storebannerSubject: BehaviorSubject<any> = new BehaviorSubject("");

  count
  subscription: Subscription;
  intervalId: number;
  constructor(private cs: CoronaService) { }

  
  ngOnInit(): void 
  {
    
  }

    
}
