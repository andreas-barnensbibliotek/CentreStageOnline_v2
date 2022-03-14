import { Router, ActivatedRoute } from '@angular/router';
import { Global } from './../../models/global';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {
  mainNavData:any=[];


  constructor(private wpApi:WpApiService) {

  }

  ngOnInit() {
      this.wpApi.currentPageDataHandler.subscribe(()=>{
      this.getNavdata();
    })
  this.getNavdata();
  }

  getNavdata(){
    this.wpApi.getMeny("Mainmenu").subscribe(Response => {

      this.mainNavData = Response
      console.log(this.mainNavData)
    });
  }

}
