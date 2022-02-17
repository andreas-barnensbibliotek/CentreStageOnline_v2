import { Router } from '@angular/router';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Global } from './../../models/global';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  mainPageData:any=[];
  videoUrl:any;
  showVideobox:boolean = false;
  dangerousVideoUrl:any;
  btnAbout:any;
  btnOverview:any;
  constructor(private wpApi:WpApiService, private glb:Global,private _sanitizer: DomSanitizer, private _router:Router, private titleService: Title ) {
  }

  ngOnInit() {
    this.titleService.setTitle( this.glb.HeadTitleMapper("Welcome"));
    this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata();
        this.btnAbout = this.glb.getlangFormButtonText().btnwelcometoAbout.btntext
        this.btnOverview = this.glb.getlangFormButtonText().btnoverviewtoStart.btntext
      })
    this.getpagedata();
    this.btnAbout = this.glb.getlangFormButtonText().btnwelcometoAbout.btntext
    this.btnOverview = this.glb.getlangFormButtonText().btnoverviewtoStart.btntext

  }

  selectLanguageChangeHandler (event: any) {
    //update the ui
    let lang = event.target.value;
    this.glb.setUserLanguage(lang);
    this.getpagedata();
  }

  getpagedata(){
    this.wpApi.getPageSlug("welcome").subscribe(Response => {
      this.mainPageData = Response

      if((Object.keys(Response).length === 0)){
        this._router.navigateByUrl("/404");
      }
      console.log(this.mainPageData)
    });
  }

}
