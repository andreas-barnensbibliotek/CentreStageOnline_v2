import { Subject } from 'rxjs';
import { Router } from '@angular/router';

// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://centrestageonline.org";
  private _devserver:string = "http://dev.centrestageonline.org";
  private _localdevserver:string = "http://localhost:81/centrestageonline.org";
  private _wpApi:string = "/wpAdmin/wp-json/wp/v2/";
  private _wpApiPost:string = "/wpAdmin/wp-json/addreg/v2/";      
  
  // storageHandler:LocalStorageHandler
  currentlanguage:string 
  userregistered:string 

  server:string = this._localdevserver + this._wpApi;
  postserver:string = this._localdevserver + this._wpApiPost;        
  devkey:string = "/devkey/alf/?type=json";     
   
  constructor(private router: Router ) {  
    this.currentlanguage = localStorage.getItem("userlang");    
  }
  
  private _currentLanguageHandler: Subject<void> = new Subject<void>();
  get currentLanguageHandler(){
    return this._currentLanguageHandler;
  }

  public getUserGuidLanguage() {
    return [
      { id: 1, name: 'English', type: "EN" },
      { id: 2, name: 'Swedish', type: "SV" },
      { id: 3, name: 'Spainish', type: "SP" },
      { id: 4, name: 'Polish', type: "PL" },
      { id: 5, name: 'France', type: "FR"  },
      { id: 6, name: 'German', type: "DE" }
    ];
  }
  public getUserShortLanguage(){
    if(!this.currentlanguage){
      this.setUserLanguage("EN")      
    }    
    return this.currentlanguage;          
  }

  public setUserLanguage(langtyp:string){      
    if(!langtyp){
      langtyp="EN";
    };
    let usrlang = this.getUserGuidLanguage().find(i => i.type === langtyp);             
    return this.setLanguage(usrlang.type)
  }
  
  public getUserfullLanguage(langtyp:string){      
    if(!langtyp){
      langtyp="EN";
    };
    let usrlang = this.getUserGuidLanguage().find(i => i.type === langtyp);             
    return usrlang.name
  }

  private setLanguage(lang){                       
    localStorage.setItem("userlang",lang);  
    this.currentlanguage = localStorage.getItem("userlang")
    return this.currentlanguage
 }

  public changeSwedish(inputValue:string){
    return inputValue
      .replace(/å/g, String.fromCharCode(229))
      .replace(/Å/g, String.fromCharCode(196))
      .replace(/ä/g, String.fromCharCode(228))
      .replace(/Ä/g, String.fromCharCode(197))
      .replace(/ö/g, String.fromCharCode(246))
      .replace(/Ö/g, String.fromCharCode(214));
  }
      
  public isUserRegistred(){   
    
    console.log("registered: " +localStorage.getItem("userreg"));
    // if(this.userregistered){
    //   return true;        
    // }else{
    //   //this.RedirectNotRegisterd();
    //   return false;
    // }
    return !!localStorage.getItem("userreg");
  }
  public registerUser(){   
    try{
      localStorage.setItem("userreg", "true");
      this.router.navigate(['/lektion']);
      return true;
    }catch{
      return false;
    };    
  }
  // RedirectNotRegisterd(){
  //   this.router.navigate(['/register']);
  // }

  public isEmptyObj = (obj) => {
    return obj === null || undefined
        ? true
        : (() => {
            for (const prop in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
              }
            }
            return true;
          })();
    };
}