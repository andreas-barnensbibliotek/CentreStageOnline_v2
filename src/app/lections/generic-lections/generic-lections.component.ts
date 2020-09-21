import { DomSanitizer } from '@angular/platform-browser';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Global } from './../../models/global';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-generic-lections',
  templateUrl: './generic-lections.component.html',
  styleUrls: ['./generic-lections.component.scss']
})
export class GenericLectionsComponent implements OnInit {
  videoUrl:any;
  dangerousVideoUrl:any;
  currpageSlug:string;
  mainPageData:any=[];
  showVideobox:boolean = false;
  showWorksheetHR:boolean= false;  
  showExtraMaterialHR:boolean= false;

testurl:any = "https://www.youtube.com/embed/d0EQWneMedc"

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer,private viewPortScroller: ViewportScroller) { 
    //this.videoUrl= this._sanitizer.bypassSecurityTrustUrl( "https://www.youtube-nocookie.com/embed/o2fcA3X3IvE");
   
  }

  ngOnInit() {    
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');
      if (!this.currpageSlug){
        this.currpageSlug ="episodes";
      }
      this.wpApi.currentPageDataHandler.subscribe(()=>{
        console.log("visa denna slugg: " +this.currpageSlug);
        this.getpagedata(this.currpageSlug);
      });
      this.getpagedata(this.currpageSlug);
      
    });
  }

  getpagedata(slug:string){
    this.wpApi.getPageSlug(slug).subscribe(Response => {
      this.mainPageData = Response;

    if((Object.keys(Response).length === 0)){ 
      this.router.navigateByUrl("/404");
    }

      if(this.mainPageData[0].acf.movieurl!=""){
        console.log("detta: " +this.mainPageData[0].acf.movieurl)
        this.showVideobox= true;
        this.updateVimeoVideoUrl(this.mainPageData[0].acf.movieurl);
      }else{
        this.showVideobox= false;
      }
      
      this.showWorksheetHR = (this.mainPageData[0].acf.worksheetblock !="") ? (true) : (false);
      this.showExtraMaterialHR = (this.mainPageData[0].acf.extramaterialblock !="") ? (true) : (false);

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
  gotoLectureBefore(url){   
    if(url=="#") return false;    
    this.router.navigateByUrl(url);
  }
  gotoLectureNext(url){    
    if(url=="#") return false;    
    this.router.navigateByUrl(url);
  }

}
