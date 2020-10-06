import { Global } from './../../models/global';
import { coursenavLanguage } from './../../models/coursenavLanguage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursenav',
  templateUrl: './coursenav.component.html',
  styleUrls: ['./coursenav.component.scss']
})
export class CoursenavComponent implements OnInit {

  courselangdata:any;

  constructor( private _courselangObj: coursenavLanguage, private _global:Global, ) {        
    
  }

    ngOnInit(): void {    
      this._global.currentLanguageHandler.subscribe(()=>{
        this.loadFormSettings();
      })  
      this.loadFormSettings();    
    } 

   loadFormSettings(){
    let CurrentShortLanguage = this._global.getUserShortLanguage();
    this.courselangdata = this._courselangObj.getCourseNavLanguageText(CurrentShortLanguage);
   }
}
