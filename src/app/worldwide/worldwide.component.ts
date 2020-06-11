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
CountryWiseCase :Array<any>  =[{country:'',cases:'',deaths:'',recovered:''}]
CountryWise : CountryReports[]=[]
CountryCase: CountryReports[]

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
  }

  testData() {
    this.cs.getworldwide().subscribe(
      response => {
        this.CountryWise = response,
        
       console.log(this.CountryWise)
       
        
      
    
     this.CountryWiseCase = this.CountryWise
      
       
      //  console.log(this.sortedDataBasedOnDate)
        this.sortByMaxCases(this.CountryWise)
       
        //console.log('this.sortedDataBasedOnDate ' + this.sortedDataBasedOnDate);
        
       
       
       
        
     //   console.log(this.statewisecase)
      },
      error => {
        console.log(error);
      }
    );
  }

  
  

    

  
 
   sortByMaxCases(sortedDataBasedOnDate) {
    this.showArrows
    this.isAscendingSort = !this.isAscendingSort;
   this.showArrows.downarrowConfirmed=!this.showArrows.downarrowConfirmed

    if(sortedDataBasedOnDate==sortedDataBasedOnDate)
    {
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