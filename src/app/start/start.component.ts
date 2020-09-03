import { WpApiService } from './../../services/wp-Api/wp-api.service';
import { Global } from './../models/global';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  langdrp:any=[];  
  selectedval:any =this.glb.getUserShortLanguage();
  mainPageData:any=[];

  constructor(private wpApi:WpApiService, private glb:Global) { 
    this.langdrp = glb.getUserGuidLanguage();  
    this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata();
      })
    this.getpagedata();
  }

  ngOnInit() {     
      
    
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
