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
                labeltxt:"Language",
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
            },
            btnwelcometoAbout:{
                btntext:"Tell me more!"
            },
            btnwelcometoOverview:{
                btntext:"Can't wait. Let's go!"
            },
            btnoverviewtoStart:{
                btntext:"Enough. Let's start!"
            },
            btnepisode14Evaluation:{
                btntext:"Let me tell you what I think..."
            },
            btnallepisodes:{
                btntext:"All episodes"
            },
            btnpartartists:{
                btntext:"Participating artists"
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
            firstname:{
                labeltxt:"Förnamn",
                hlptxt:"Ange förnamn",
                placeholdertxt:"Ange förnamn",
            },
            lastname:{
                labeltxt:"Efternamn",
                hlptxt:"Ange efternamn",
                placeholdertxt:"Ange efternamn",
            },
            befatting:{
                labeltxt:"Befattning",
                hlptxt:"Ange befattning",
                placeholdertxt:"Ange befattning",
            },
            profession:{
                labeltxt:"Befattning",
                hlptxt:"Ange befattning",
                placeholdertxt:"Ange befattning",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"Ange organisation",
                placeholdertxt:"Ange organisation",
            },
            email:{
                labeltxt:"Epost",
                hlptxt:"Ange epostadress",
                placeholdertxt:"Ange epostadress",
            },
            submit:{
                btntext:"Registrera"
            },
            btnwelcometoAbout:{
                btntext:"Berätta mer!"
            },
            btnwelcometoOverview:{
                btntext:"Kan inte vänta. Nu kör vi!"
            },
            btnoverviewtoStart:{
                btntext:"Tillräckligt. Låt oss börja!"
            },
            btnepisode14Evaluation:{
                btntext:"Låt mig berätta vad jag tycker..."
            },
            btnallepisodes:{
                btntext:"Alla avsnitt"
            },
            btnpartartists:{
                btntext:"Deltagande konstnärer"
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
            firstname:{
                labeltxt:"Imię",
                hlptxt:"Wpisz swoje imię",
                placeholdertxt:"Wpisz swoje imię",
            },
            lastname:{
                labeltxt:"Nazwisko",
                hlptxt:"Wpisz swoje nazwisko",
                placeholdertxt:"Wpisz swoje nazwisko",
            },
            befatting:{
                labeltxt:"Pozycja",
                hlptxt:"Podaj swoją pozycję",
                placeholdertxt:"Podaj swoją pozycję",
            },
            profession:{
                labeltxt:"Pozycja",
                hlptxt:"Podaj swoją pozycję",
                placeholdertxt:"Podaj swoją pozycję",
            },
            organisation:{
                labeltxt:"Organizacja",
                hlptxt:"Organizacja",
                placeholdertxt:"Organizacja",
            },
            email:{
                labeltxt:"E-mail",
                hlptxt:"Wpisz adres e-mail",
                placeholdertxt:"Wpisz adres e-mail",
            },
            submit:{
                btntext:"Zarejestrować"
            }  ,
            btnwelcometoAbout:{
                btntext:"Powiedz mi więcej!"
            },
            btnwelcometoOverview:{
                btntext:"Nie mogę się doczekać. Chodźmy!"
            },
            btnoverviewtoStart:{
                btntext:"Dość. Zaczynajmy!"
            },
            btnepisode14Evaluation:{
                btntext:"Powiem ci, co myślę..."
            },
            btnallepisodes:{
                btntext:"Wszystkie odcinki"
            },
            btnpartartists:{
                btntext:"Artyści biorący udział"
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
            firstname:{
                labeltxt:"Vorname",
                hlptxt:"Vorname einfügen",
                placeholdertxt:"Vorname einfügen",
            },
            lastname:{
                labeltxt:"Nachname",
                hlptxt:"Nachname einfügen",
                placeholdertxt:"Nachname einfügen",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"Position eingeben",
                placeholdertxt:"Position eingeben",
            },
             profession:{
                labeltxt:"Position",
                hlptxt:"Position eingeben",
                placeholdertxt:"Position eingeben",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"Fügen Sie Ihre Organisation ein",
                placeholdertxt:"Fügen Sie Ihre Organisation ein",
            },
            email:{
                labeltxt:"Email",
                hlptxt:"Geben Sie eine E-Mail-Adresse ein",
                placeholdertxt:"Geben Sie eine E-Mail-Adresse ein",
            },
            submit:{
                btntext:"Registrieren"
            },
            btnwelcometoAbout:{
                btntext:"Erzähl mir mehr!"
            },
            btnwelcometoOverview:{
                btntext:"Ich kann es kaum erwarten. Lass uns gehen!"
            },
            btnoverviewtoStart:{
                btntext:"Genug. Lasst uns beginnen!"
            },
            btnepisode14Evaluation:{
                btntext:"Lass mich dir sagen, was ich denke..."
            },
            btnallepisodes:{
                btntext:"Alle Folgen"
            },
            btnpartartists:{
                btntext:"Teilnehmende Künstler"
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
            firstname:{
                labeltxt:"Prénom",
                hlptxt:"Insérez votre prénom",
                placeholdertxt:"Insérez votre prénom",
            },
            lastname:{
                labeltxt:"Nom de famille",
                hlptxt:"Insérez votre nom",
                placeholdertxt:"Insérez votre nom",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"Entrer la position",
                placeholdertxt:"Entrer la position",
            },
            profession:{
                labeltxt:"Position",
                hlptxt:"Entrer la position",
                placeholdertxt:"Entrer la position",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"Insérez votre organisation",
                placeholdertxt:"Insérez votre organisation",
            },
            email:{
                labeltxt:"E-mail",
                hlptxt:"Insérer une adresse e-mail",
                placeholdertxt:"Insérer une adresse e-mail",
            },
            submit:{
                btntext:"S'inscrire"
            },
            btnwelcometoAbout:{
                btntext:"Dis m'en plus!"
            },
            btnwelcometoOverview:{
                btntext:"Je ne peux pas attendre. Allons-y!"
            },
            btnoverviewtoStart:{
                btntext:"Assez. Commençons!"
            },
            btnepisode14Evaluation:{
                btntext:"Laissez-moi vous dire ce que je pense..."
            },
            btnallepisodes:{
                btntext:"Tous les épisodes"
            },
            btnpartartists:{
                btntext:"Artistes participants"
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
            firstname:{
                labeltxt:"Primer nombre",
                hlptxt:"Inserta tu nombre",
                placeholdertxt:"Inserta tu nombre",
            },
            lastname:{
                labeltxt:"Apellido",
                hlptxt:"Inserta tu apellido",
                placeholdertxt:"Inserta tu apellido",
            },
            befatting:{
                labeltxt:"Posición",
                hlptxt:"Ingrese la posición",
                placeholdertxt:"Ingrese la posición",
            },
            profession:{
                labeltxt:"Posición",
                hlptxt:"Ingrese la posición",
                placeholdertxt:"Ingrese la posición",
            },
            organisation:{
                labeltxt:"Organización",
                hlptxt:"Organización",
                placeholdertxt:"Organización",
            },
            email:{
                labeltxt:"Email",
                hlptxt:"Insertar una dirección de correo electrónico",
                placeholdertxt:"Insertar una dirección de correo electrónico",
            },
            submit:{
                btntext:"Registrarse"
            },
            btnwelcometoAbout:{
                btntext:"¡Dime más!"
            },
            btnwelcometoOverview:{
                btntext:"No puedo esperar. ¡Vamonos!"
            },
            btnoverviewtoStart:{
                btntext:"Suficiente. ¡Empecemos!"
            },
            btnepisode14Evaluation:{
                btntext:"Déjame decirte lo que pienso..."
            },
            btnallepisodes:{
                btntext:"Todos los episodios"
            },
            btnpartartists:{
                btntext:"Artistas participantes"
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