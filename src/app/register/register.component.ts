import { WpApiService } from './../../services/wp-Api/wp-api.service';
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

  constructor(private _wpApi:WpApiService, private _regusrformdata: registerUserFormData, private _global:Global, private fb: FormBuilder) {     
   
    this.tmpAllLanguages = _global.getUserGuidLanguage();
    
  }

  get txtfirstname(): any {
    return this.regFormgoup.get('txtfirstname');
  }
  get txtlastname(): any {
    return this.regFormgoup.get('txtlastname');
  }
  get txtgender(): any {
    return this.regFormgoup.get('txtgender');
  }
  get txtprofession(): any {
    return this.regFormgoup.get('txtprofession');
  }
  get txtemail(): any {
    return this.regFormgoup.get('txtemail');
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
      txtfirstname: ['', Validators.required],
      txtlastname:['', Validators.required],
      txtgender:['', Validators.required],  
      txtorganisation:[''],
      txtprofession:['', Validators.required],      
      txtemail:['', Validators.required]
    })
    
    let defaultDrpFullLanguageValue= this._global.getUserfullLanguage(CurrentShortLanguage);
    this.regFormgoup.patchValue({ drpChooselang: defaultDrpFullLanguageValue });    
  }    
    
  onSubmit(){     
    if (this.regFormgoup.valid){

      let registerobj= {
        post_title : "Register user - " + this.regFormgoup.get('drpChooselang').value,
        language: this.regFormgoup.get('drpChooselang').value,
        gender: this.regFormgoup.get('txtformGender').value,
        befattning: this.regFormgoup.get('txtformbefattning').value,
      };

      this.registerUserDB(registerobj);      
    };
  }

  registerUserDB(regData:any){
        
    this._wpApi.postRegisterUser(JSON.parse(JSON.stringify(regData))).subscribe((response)=>{      
      console.log("detta är efter post"+ response)
      alert("detta är efter post"+ response)
      //this._global.registerUser();      
    });

  }
}
