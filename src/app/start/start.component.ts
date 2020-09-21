import { ViewportScroller } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
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
  videoUrl:any;
  showVideobox:boolean = false;
  dangerousVideoUrl:any;
  constructor(private wpApi:WpApiService, private glb:Global, private _sanitizer: DomSanitizer,private viewPortScroller: ViewportScroller) { 
    
  }

  ngOnInit() {     
      this.langdrp = this.glb.getUserGuidLanguage();  
    this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata();
        
      })
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
      
      if(this.mainPageData[0].acf.movieurl!=""){
        console.log("detta: " +this.mainPageData[0].acf.movieurl)
        this.showVideobox= true;
        this.updateVimeoVideoUrl(this.mainPageData[0].acf.movieurl);
      }else{
        this.showVideobox= false;
      }
      
      console.log(this.mainPageData)  
    });
  }
updateVimeoVideoUrl(id: string) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    this.videoUrl =
        this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
