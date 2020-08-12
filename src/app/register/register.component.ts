import { Global } from './../models/global';
import { registerUserFormData } from './../models/RegisteruserFormData';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formlangdata:any;
  userdata:any= this._regusrformdata;
  
  constructor(private _regusrformdata: registerUserFormData, private _global:Global) {     
    
  }

  ngOnInit(): void {    
    let tmplang = this._global.getUserLanguage()
    this.formlangdata = this._regusrformdata.getRegFormLanguage(tmplang);

  }

  getregisterForm(){
    let tmpstructure  = this.userdata.userdataSturcture;
    tmpstructure.post_title = "";

    console.log("formdata " + this.userdata.post_title);
  }

  regFormLanguageSettings(lang:string){
    this._regusrformdata

  }

}
