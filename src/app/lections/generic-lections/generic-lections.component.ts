import { AncorScrollService } from './../../../services/anchorScrollerService/ancor-scroll.service';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { WpApiService } from './../../../services/wp-Api/wp-api.service';
import { Global } from './../../models/global';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-generic-lections',
  templateUrl: './generic-lections.component.html',
  styleUrls: ['./generic-lections.component.scss']
})
export class GenericLectionsComponent implements OnInit {
  videoUrl:any;
  extravideoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  currpageSlug:string;
  mainPageData:any=[];
  showVideobox:boolean = false;
  showExtraVideobox:boolean = false;
  showWorksheetHR:boolean= false;
  showExtraMaterialHR:boolean= false;
  btnallEpisodes:any;
  btnParticipants:any;
  allWorksheets:any;
  allWorksheetsFile:any;
  btnEpisodeBefore:any;
  btnEpisodeNext:any;

testurl:any = "https://www.youtube.com/embed/d0EQWneMedc"

  constructor(private wpApi:WpApiService, private glb:Global ,private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer,private viewPortScroller: ViewportScroller, private _anchor: AncorScrollService, private titleService:Title) {
    //this.videoUrl= this._sanitizer.bypassSecurityTrustUrl( "https://www.youtube-nocookie.com/embed/o2fcA3X3IvE");

  }

  ngOnInit() {
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');
      this.titleService.setTitle( this.glb.HeadTitleMapper(this.currpageSlug));
      if (!this.currpageSlug){
        this.currpageSlug ="episodes";
      }
      this.wpApi.currentPageDataHandler.subscribe(()=>{

        console.log("visa denna slugg: " +this.currpageSlug);
        this.getpagedata(this.currpageSlug);
        this.btnallEpisodes = this.glb.getlangFormButtonText().btnallepisodes.btntext;
        this.btnEpisodeBefore = this.glb.getlangFormButtonText().btnallepisodes.btnBefore;
        this.btnEpisodeNext = this.glb.getlangFormButtonText().btnallepisodes.btnNext;
        this.btnParticipants = this.glb.getlangFormButtonText().btnpartartists.btntext;
        this.allWorksheets = this.glb.getlangFormButtonText().allWorksheets.btntext;
        this.allWorksheetsFile = this.glb.filesrc +"all_CStage_Online_Worksheet_"+ this.glb.currentlanguage + ".zip"
      });
      this.getpagedata(this.currpageSlug);
      this.btnallEpisodes = this.glb.getlangFormButtonText().btnallepisodes.btntext;
      this.btnEpisodeBefore = this.glb.getlangFormButtonText().btnallepisodes.btnBefore;
      this.btnEpisodeNext = this.glb.getlangFormButtonText().btnallepisodes.btnNext;
      this.btnParticipants = this.glb.getlangFormButtonText().btnpartartists.btntext
      this.allWorksheets = this.glb.getlangFormButtonText().allWorksheets.btntext;
      this.allWorksheetsFile = this.glb.filesrc +"all_CStage_Online_Worksheet_"+ this.glb.currentlanguage + ".zip"
    });
    this._anchor.listen();


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
  getlection1Class(slug){
    // if(slug=="episode-1"){
    //   return "ep1";
    // }
  }
}
