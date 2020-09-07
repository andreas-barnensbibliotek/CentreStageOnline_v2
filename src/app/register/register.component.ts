import { Global } from './../models/global';
import { registerUserFormData } from './../models/RegisteruserFormData';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formlangdata:any;
  userdata:any= this._regusrformdata;
  regFormgoup:FormGroup;
  tmpAllLanguages:{};
  get formlanguage() { return this.regFormgoup.get('txtformlanguage')}

  constructor(private _regusrformdata: registerUserFormData, private _global:Global, private fb: FormBuilder) {     
   
    this.tmpAllLanguages = _global.getUserGuidLanguage();
    
  }

  ngOnInit(): void {    
    this._global.currentLanguageHandler.subscribe(()=>{
      this.loadFormSettings();
    })  
    this.loadFormSettings();    
  } 
  
  loadFormSettings(){
    let CurrentShortLanguage = this._global.getUserShortLanguage();
    this.formlangdata = this._regusrformdata.getRegFormLanguageText(CurrentShortLanguage);

    this.regFormgoup = this.fb.group({
      drpChooselang:['', Validators.required],      
      txtformGender: ['', Validators.required],
      txtformbefattning:['', Validators.required]
    })
    
    let defaultDrpFullLanguageValue= this._global.getUserfullLanguage(CurrentShortLanguage);
    this.regFormgoup.patchValue({ drpChooselang: defaultDrpFullLanguageValue });
  }

  onSubmit(){
    let test1= this.regFormgoup.get('txtformlanguage');
        
    if (this.regFormgoup.valid){
      JSON.stringify(this.regFormgoup.value )  
      this._global.registerUser();
    }
  }
}
