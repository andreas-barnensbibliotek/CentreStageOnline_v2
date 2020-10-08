import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { WpApiService } from './../../services/wp-Api/wp-api.service';
import { Global } from './../models/global';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  langdrp:any=[];  
  selectedval:any =this.glb.getUserShortLanguage();
  mainPageData:any=[];
 
  constructor(private wpApi:WpApiService, private glb:Global, private _router:Router) { 
  }

  ngOnInit() {     
    this.langdrp = this.glb.getUserGuidLanguage();  
    this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata();
        
      })
    this.getpagedata();
    
  }

  // selectLanguageChangeHandler (event: any) {
  //   //update the ui
  //   let lang = event.target.value;
  //   this.glb.setUserLanguage(lang);
  //   this.getpagedata();
  // }

  getpagedata(){
    this.wpApi.getPageSlug("start").subscribe(Response => {
      this.mainPageData = Response        
      
    });
  }
  // selectLanguageChangeHandler (event: any) {
  //   //update the ui
  //   let lang = event.target.value;
  //   console.log("språk: " + lang);
  //   this.glb.setUserLanguage(lang);
  //   this.glb.getCookieText();
  //   this.wpApi.currentPageDataHandler.next();    
  //   this.glb.currentLanguageHandler.next();
    
  //   // this.getpagedata();
  // }

  selectLanguagehandler(lang: any) {
    //update the ui    
    console.log("språk: " + lang);
    this.glb.setUserLanguage(lang);
    this.glb.getCookieText();
    this.wpApi.currentPageDataHandler.next();    
    this.glb.currentLanguageHandler.next();
    this._router.navigate(['/welcome']);
  }
}
