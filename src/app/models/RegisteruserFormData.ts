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
              header:{
                  text:"Register!"
              },
              lang:{
                labeltxt:"Country",
                hlptxt:"Insert language here",
                placeholdertxt:"Insert language",
              },
              gender:{
                labeltxt:"Gender",
                hlptxt:"Insert gender",
                placeholdertxt:"Insert gender",
              },
              firstname:{
                labeltxt:"Firstname",
                hlptxt:"Insert your firstname",
                placeholdertxt:"Insert your firstname",
              },
              lastname:{
                labeltxt:"Lastname",
                hlptxt:"Insert your lastname",
                placeholdertxt:"Insert your lastname",
              },
              befatting:{
                labeltxt:"Job title",
                hlptxt:"Insert job title",
                placeholdertxt:"Insert job title",
              },
              profession:{
                labeltxt:"Profession",
                hlptxt:"Insert your profession",
                placeholdertxt:"Insert your profession",
              },
              organisation:{
                labeltxt:"Organisation",
                hlptxt:"Insert your organisation",
                placeholdertxt:"Insert your organisation",
              },
              email:{
                labeltxt:"Email",
                hlptxt:"Insert an emailadress",
                placeholdertxt:"Insert an emailadress",
              },
              submit:{
                  btntext:"Register"
              }
        },
        {
            type: "SV",
            header:{
                text:"Registrera dig!"
            },
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
            header:{
                text:"Zarejestrować!"
            },
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
        },
        {
            type: "DE",
            header:{
                text:"Registrieren!"
            },
            lang:{
                labeltxt:"Sprache",
                hlptxt:"Sprache eingeben",
                placeholdertxt:"Sprache eingeben",
            },
            gender:{
                labeltxt:"Sex",
                hlptxt:"Geben Sie das Geschlecht ein",
                placeholdertxt:"Geben Sie das Geschlecht ein",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"Position eingeben",
                placeholdertxt:"Position eingeben",
            },
            submit:{
                btntext:"Registrera"
            }
        },
        {
            type: "FR",
            header:{
                text:"S'inscrire!"
            },
            lang:{
                labeltxt:"Langue",
                hlptxt:"Entrez la langue",
                placeholdertxt:"Entrez la langue",
            },
            gender:{
                labeltxt:"Sexe",
                hlptxt:"Entrez le sexe",
                placeholdertxt:"Entrez le sexe",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"Entrer la position",
                placeholdertxt:"Entrer la position",
            },
            submit:{
                btntext:"S'inscrire"
            }
        },
        {
            type: "SP",
            header:{
                text:"¡Registrarse!"
            },
            lang:{
                labeltxt:"Idioma",
                hlptxt:"Ingrese idioma",
                placeholdertxt:"Ingrese idioma",
            },
            gender:{
                labeltxt:"sexo",
                hlptxt:"ingrese género",
                placeholdertxt:"ingrese género",
            },
            befatting:{
                labeltxt:"Posición",
                hlptxt:"Ingrese la posición",
                placeholdertxt:"Ingrese la posición",
            },
            submit:{
                btntext:"Registrarse"
            }
        }
    ]   
        
    }      
   
    public getRegFormLanguageText(langtyp:string){      
        if(!langtyp){
          langtyp="EN";
        };
        let formlang = this.getFormPublicText().find(i => i.type === langtyp);  
        return formlang;
       
      }
}