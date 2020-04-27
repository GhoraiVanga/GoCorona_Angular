import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { CountryReports } from 'src/countryReports';
import { JavatechieCovid19Service } from '../javatechie-covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit 
{
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  ELEMENT_DATA :CountryReports[]
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered','active','critical','tests'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA); 
  
  constructor(private service:JavatechieCovid19Service) { }
  
 
  public value;
  ngOnInit() 
  {
    this.getAllReports();
    this.dataSource.paginator 
    this.dataSource.sort = this.sort;
    console.log(this.ELEMENT_DATA);
  }
  public getAllReports()
  {
    let resp=this.service.covid19Reports();
   resp.subscribe(report=>this.dataSource.data=report as CountryReports[]);
   

  }
  applyFilter(filterValue: string) {
    
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  goCNN() {
    window.location.href='http://www.cnn.com/';
}

  }


export class ButtonTypesExample {}
