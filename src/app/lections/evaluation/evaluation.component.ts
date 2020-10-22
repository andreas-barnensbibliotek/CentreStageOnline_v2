import { AncorScrollService } from './../../../services/anchorScrollerService/ancor-scroll.service';
import { ViewportScroller } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from './../../models/global';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  videoUrl:any;
  extravideoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  currpageSlug:string;
  mainPageData:any=[];
  showVideobox:boolean = false;
  showExtraVideobox:boolean = false;
  showWorksheetHR:boolean= false;  
  showExtraMaterialHR:boolean= false;
  btnevaluation:any;
  btnallEpisodes:any;
  trippuslink:any;
testurl:any = "https://www.youtube.com/embed/d0EQWneMedc"

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer,private viewPortScroller: ViewportScroller, private _anchor: AncorScrollService) { 
    //this.videoUrl= this._sanitizer.bypassSecurityTrustUrl( "https://www.youtube-nocookie.com/embed/o2fcA3X3IvE");
   
  }

  ngOnInit() {         
    this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getpagedata();    
        this.btnevaluation = this.glb.getlangFormButtonText().btnepisode14Evaluation.btntext;   
        this.btnallEpisodes = this.glb.getlangFormButtonText().btnallepisodes.btntext;
        this.trippuslink = this.glb.getlangFormButtonText().trippuslink.btntext;
       
      })
    this.getpagedata(); 
    this.btnevaluation = this.glb.getlangFormButtonText().btnepisode14Evaluation.btntext; 
    this.btnallEpisodes = this.glb.getlangFormButtonText().btnallepisodes.btntext;
    this.trippuslink = this.glb.getlangFormButtonText().trippuslink.btntext;
      
    this._anchor.listen();
  }

  selectLanguageChangeHandler (event: any) {
    //update the ui
    let lang = event.target.value;
    this.glb.setUserLanguage(lang);
    this.getpagedata();
  }

  getpagedata(){
    this.wpApi.getPageSlug("episode-14").subscribe(Response => {
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
      
      if(this.mainPageData[0].acf.extravimeomovieid!="" && this.mainPageData[0].acf.extravimeomovieid != undefined){            
        this.showExtraVideobox= true;
        this.updateExtraVimeoVideoUrl(this.mainPageData[0].acf.extravimeomovieid);
      }else{
        this.showExtraVideobox= false;
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
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    this.videoUrl =
        this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl + id);
  }
  updateExtraVimeoVideoUrl(id: string) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' ;
    this.extravideoUrl =
        this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl + id);
  }

  gotoLectureBefore(url){   
    if(url=="#") return false;    
    this.router.navigateByUrl(url);
  }
  gotoLectureNext(url){    
    if(url=="#") return false;    
    this.router.navigateByUrl(url);
  }

  getClass(slug){
    return "ep"+ slug.split('-')[1];
  }
 
}
