import { Component, OnInit } from '@angular/core';
import {Global} from "./models/global";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CentreStageOnline';
  showlang:string =""

  constructor(private glb:Global) {
    console.log("user reggad = " +this.glb.isUserRegistred());
    console.log("lang = " +this.glb.getUserShortLanguage());
 }
 ngOnInit() {
  
  //  localStorage.setItem('userlang',"SV" );
 }

}
