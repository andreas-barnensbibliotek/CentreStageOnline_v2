import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class registerUserFormData {
    public userdataSturcture= {
        post_title :"",
        language: "",
        gender : "",
        befattning : ""
    } 

    getFormPublicText(){
        
        return [{
              type: "EN",
              lang:{
                labeltxt:"Language",
                hlptxt:"Insert language here",
                placeholdertxt:"Insert language",
              },
              gender:{
                labeltxt:"Gender",
                hlptxt:"Insert gender",
                placeholdertxt:"Insert gender",
              },
              befatting:{
                labeltxt:"Job title",
                hlptxt:"Insert job title",
                placeholdertxt:"Insert job title",
              },
              submit:{
                  btntext:"Register"
              }
            },
            {
            type: "SV",
            lang:{
                labeltxt:"Språk",
                hlptxt:"Ange språk",
                placeholdertxt:"Ange språk",
            },
            gender:{
                labeltxt:"Kön",
                hlptxt:"Ange Kön",
                placeholdertxt:"Ange kön",
            },
            befatting:{
                labeltxt:"Befattning",
                hlptxt:"Ange befattning",
                placeholdertxt:"Ange befattning",
            },
            submit:{
                btntext:"Registrera"
            }
        },
        {
            type: "PL",
            lang:{
                labeltxt:"Język",
                hlptxt:"wprowadź język",
                placeholdertxt:"wprowadź język",
            },
            gender:{
                labeltxt:"Seks",
                hlptxt:"wprowadź płeć",
                placeholdertxt:"wprowadź płeć",
            },
            befatting:{
                labeltxt:"Pozycja",
                hlptxt:"Podaj swoją pozycję",
                placeholdertxt:"Podaj swoją pozycję",
            },
            submit:{
                btntext:"Zarejestrować"
            }   
        }]   
        
    }      
   
    public getRegFormLanguageText(langtyp:string){      
        if(!langtyp){
          langtyp="EN";
        };
        let formlang = this.getFormPublicText().find(i => i.type === langtyp);  
        return formlang;
       
      }
}