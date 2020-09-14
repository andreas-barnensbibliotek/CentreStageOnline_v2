import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
import { Global } from './../models/global';
import { WpApiService } from './../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-mainpage',
  templateUrl: './generic-mainpage.component.html',
  styleUrls: ['./generic-mainpage.component.scss']
})
export class GenericMainpageComponent implements OnInit {
  videoUrl:any;
  dangerousVideoUrl:any;
  currpageSlug:string;
  mainPageData:any=[];
  showVideobox:boolean = false;
  showWorksheetHR:boolean= false;  
  showExtraMaterialHR:boolean= false;

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private _sanitizer: DomSanitizer, private viewPortScroller: ViewportScroller) {    
  }

  ngOnInit() {    
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');
      // if (!this.currpageSlug){
      //   this.currpageSlug ="episodes";
      // }
      this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata(this.currpageSlug);
      });
      this.getpagedata(this.currpageSlug);
      
    });
  }

  getpagedata(slug:string){
    this.wpApi.getPageSlug(slug).subscribe(Response => {
      this.mainPageData = Response 
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
}
