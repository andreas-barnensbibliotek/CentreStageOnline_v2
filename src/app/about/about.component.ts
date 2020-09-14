import { DomSanitizer } from '@angular/platform-browser';
import { Global } from './../models/global';
import { WpApiService } from './../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
 
  mainPageData:any=[];
  videoUrl:any;
  showVideobox:boolean = false;
  dangerousVideoUrl:any;
  constructor(private wpApi:WpApiService, private glb:Global,private _sanitizer: DomSanitizer) { 
  }

  ngOnInit() {         
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
    this.wpApi.getPageSlug("about").subscribe(Response => {
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
    // TODO EXPORT TO FUNCTION!!!!!!!!!!!!!!!---------------------
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    this.videoUrl =
        this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
}
