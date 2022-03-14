import { Event, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Global} from "./models/global";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CentreStageOnline';
  showlang:string =""
  cookieText:string;
  cookieLinktext:string;
  showaltmeny:boolean=false;

  constructor(private glb:Global,public router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        gtag('config', 'UA-7175122-15', {'page_path': event.urlAfterRedirects});
      }
    })
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.showaltmeny =false;
        if ((<NavigationEnd>event).url =="/reflectivefilm"){
          this.showaltmeny = true;
        };
      }
    });


    this.glb.currentLanguageHandler.subscribe(()=>{
      this.addcookietext();
    });
    this.addcookietext();
    //  localStorage.setItem('userlang',"SV" );
  }

  addcookietext(){
    let cookieobj = this.glb.getCookieText();
    this.cookieText= cookieobj.cookietext;
    this.cookieLinktext= cookieobj.linktext;
  }



}
