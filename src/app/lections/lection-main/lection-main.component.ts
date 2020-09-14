import { Global } from './../../models/global';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lection-main',
  templateUrl: './lection-main.component.html',
  styleUrls: ['./lection-main.component.scss']
})
export class LectionMainComponent implements OnInit {
  langdrp:any=[];  
  selectedval:any =this.glb.getUserShortLanguage();
  mainPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global) { 
    this.langdrp = glb.getUserGuidLanguage();  
    
  }

  ngOnInit() {     
      
    this.getpagedata();
    
  }

  selectLanguageChangeHandler (event: any) {
    //update the ui
    let lang = event.target.value;
    this.glb.setUserLanguage(lang);
    this.getpagedata();
  }

  getpagedata(){
    this.wpApi.getPageSlug("start").subscribe(Response => {
      this.mainPageData = Response     
      console.log(this.mainPageData)  
    });
  }

 
}
