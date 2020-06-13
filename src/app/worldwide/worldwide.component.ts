import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../shared/corona.service';
import { CountryReports } from 'src/CountryReports';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {

  showArrows = {
    uparrowState: false,
    downarrowState: false,
    downarrowConfirmed:false,
    uparrowowConfirmed:false,
    downarrowActive:false,
    uparrowActive:false,
    downarrowRecovered:false,
    uparrowRecovered:false,
    downarrowDeath:false,
    uparrowDeath:false,
}
CountryWiseCase :Array<any>  =[{country:'',cases:'',deaths:'',recovered:'',todayCases:'',todayDeaths:'',population:'',tests:'',todayRecovered:''}]
CountryWise :  []
CountryCase: CountryReports[]
currentcase=0;
todayCases=0
totaldeath=0
todaydeads=0
todayrecovered=0
totalrecoverd=0

  showDistrict:boolean=false
  sortedDataBasedOnDate :any;
  private isAscendingSort: boolean = false;

  //DailystateStatus: Array<any> = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
  //DailyStatus: any = { total: '' }
  //statewisedata: Array<any> = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
  //statewisecase: any = { confirmed: '', active: '', recovered: '', deaths: '' }
  //startdate = new Date()
  //lastupdateddate = new Date();
  //lastupdated: any = { hour: 0, minute: 0, second: 0 }
  //SingleStateData
  //lastrefreshedtime: any;

  constructor(private cs: CoronaService) { }

  ngOnInit(): void {

    
    this.testData()
    console.log(this.CountryWise)
  }

  testData() {
    this.cs.getworldwide().subscribe
    (
     
      response =>
       {
        
        this.CountryWise = response
        
        this.sortByMaxCases(this.CountryWise)
        this.CountryWiseCase = this.CountryWise
       
        for(let a of this.CountryCase)
   {
     this.currentcase=this.currentcase+a.cases;
   }
   for(let b of this.CountryCase)
   {
this.totaldeath=this.totaldeath+b.deaths;
   }
   for(let c of this.CountryCase)
   {
    this.todayCases=this.todayCases+c.todayCases;
   }
   
   for(let d of this.CountryCase)
   {
     this.todaydeads=this.todaydeads+d.todayDeaths;
   }
   for(let r of this.CountryCase)
   {
     this.todayrecovered=this.todayrecovered+r.todayRecovered;
   }
   for(let R of this.CountryCase)
   {
     this.totalrecoverd=this.totalrecoverd+R.recovered;
   }
        
    
 },
      error => {
        console.log(error);
      }
    );
  }

  
  

    

  
 
   sortByMaxCases(data) {
    this.showArrows
    this.isAscendingSort = !this.isAscendingSort;
   this.showArrows.downarrowConfirmed=!this.showArrows.downarrowConfirmed

    if(data==data)
    {
      console.log("inner")
      console.log(data)
      this.CountryCase = this.CountryWise.sort(this.sortByCountery)
    }
 
    
  }
    

  
      
    
  
  sortByCountery(a:CountryReports,b:CountryReports)
   {
    if (b.cases < a.cases) {
      return -1;
    }
    if (b.cases > a.cases) {
      return 1;
    }
    return 0;
  
  
 
 }
}

