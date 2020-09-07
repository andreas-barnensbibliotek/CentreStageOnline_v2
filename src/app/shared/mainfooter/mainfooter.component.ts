import { Global } from './../../models/global';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainfooter',
  templateUrl: './mainfooter.component.html',
  styleUrls: ['./mainfooter.component.scss']
})
export class MainfooterComponent implements OnInit {
  langdrp:any=[];  
  selectedval:any =this.glb.getUserShortLanguage();

  constructor(private wpApi:WpApiService, private glb:Global) { 
    this.langdrp = glb.getUserGuidLanguage();      
  }  

  ngOnInit() {
  }

  selectLanguageChangeHandler (event: any) {
    //update the ui
    let lang = event.target.value;
    this.glb.setUserLanguage(lang);
    this.wpApi.currentPageDataHandler.next();    
    this.glb.currentLanguageHandler.next();
  }
}
