import { DomSanitizer } from '@angular/platform-browser';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Global } from './../../models/global';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
testurl:any = "https://www.youtube.com/embed/d0EQWneMedc"

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private _sanitizer: DomSanitizer) { 
    //this.videoUrl= this._sanitizer.bypassSecurityTrustUrl( "https://www.youtube-nocookie.com/embed/o2fcA3X3IvE");
   
  }

  ngOnInit() {    
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');
      
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
