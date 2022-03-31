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
                text:"Yes, I would like to take part..."
            },
            lang:{
                labeltxt:"Language",
                hlptxt:"", //"Insert language here",
                placeholdertxt:"", //"Insert language",
            },
            comments:{
                labeltxt:"Comments",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //"Gender comments",
            },
            country:{
                labeltxt:"Country",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //"Insert Country",
            },
            gender:{
                labeltxt:"Gender",
                alternativ:{
                    alt1:"Female",
                    alt2:"Male",
                    alt3:"Other"
                },
                hlptxt:"", //"Insert gender",
                placeholdertxt:"", //"Insert gender",
            },
            firstname:{
                labeltxt:"Firstname",
                hlptxt:"", //Insert your firstname
                placeholdertxt:"", //"Insert your firstname",
            },
            lastname:{
                labeltxt:"Surname",
                hlptxt:"", //"Insert your lastname",
                placeholdertxt:"", //"Insert your lastname",
            },
            befatting:{
                labeltxt:"Job title",
                hlptxt:"", //"Insert job title",
                placeholdertxt:"", //:"Insert job title",
            },
            profession:{
                labeltxt:"Profession",
                hlptxt:"", //"Insert your profession",
                placeholdertxt:"", //"Insert your profession",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"", //"Insert your organisation",
                placeholdertxt:"", //"Insert your organisation",
            },
            email:{
                labeltxt:"Email",
                hlptxt:"", //"Insert an emailadress",
                placeholdertxt:"", //"Insert an emailadress",
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
            btnabouttoStart:{
                btntext:"Let's start!"
            },
            btnepisode14Evaluation:{
                btntext:"Let me tell you what I think..."
            },
            btnallepisodes:{
                btntext:"All episodes",
                btnBefore:"Previous",
                btnNext:"Next"
            },
            btnpartartists:{
                btntext:"Participating artists"
            },
            allWorksheets:{
                btntext:"Download all Worksheets (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNUMkMzMUpVR0JZTk1XTllKREhESVVXVFNLSy4u"
            }
        },
        {
            type: "SV",
            header:{
                text:"Ja, jag vill delta..."
            },
            lang:{
                labeltxt:"Språk",
                hlptxt:"", //"Ange språk",
                placeholdertxt:"", //:"Ange språk",
            },
            comments:{
                labeltxt:"Kommentar",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //"Gender comments",
            },
            country:{
                labeltxt:"Land",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //"Insert Country",
            },
            gender:{
                labeltxt:"Kön",
                alternativ:{
                    alt1:"Kvinna",
                    alt2:"Man",
                    alt3:"Annat"
                },
                hlptxt:"", //"Insert gender",
                placeholdertxt:"", //"Insert gender",
            },
            firstname:{
                labeltxt:"Förnamn",
                hlptxt:"", //"Ange förnamn",
                placeholdertxt:"", //"Ange förnamn",
            },
            lastname:{
                labeltxt:"Efternamn",
                hlptxt:"", //"Ange efternamn",
                placeholdertxt:"", //:"Ange efternamn",
            },
            befatting:{
                labeltxt:"Befattning",
                hlptxt:"", //"Ange befattning",
                placeholdertxt:"", //:"Ange befattning",
            },
            profession:{
                labeltxt:"Befattning",
                hlptxt:"", //"Ange befattning",
                placeholdertxt:"", //:"Ange befattning",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"", //"Ange organisation",
                placeholdertxt:"", //:"Ange organisation",
            },
            email:{
                labeltxt:"Epost",
                hlptxt:"", //"Ange epostadress",
                placeholdertxt:"", //:"Ange epostadress",
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
                btntext:"Låt oss börja!"
            },
            btnabouttoStart:{
                btntext:"Låt oss börja!"
            },
            btnepisode14Evaluation:{
                btntext:"Låt mig berätta vad jag tycker..."
            },
            btnallepisodes:{
                btntext:"Alla avsnitt",
                btnBefore:"Föregående",
                btnNext:"Nästa"
            },
            btnpartartists:{
                btntext:"Deltagande konstnärer"
            },
            allWorksheets:{
                btntext:"Ladda ner alla arbetsblad (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNUMzdBTk1aMFNDRzlOOVNVSjlQWDA5TEY0Ri4u"
            }
        },
        {
            type: "PL",
            header:{
                text:"Tak, chciałbym wziąć udział..."
            },
            lang:{
                labeltxt:"Język",
                hlptxt:"", //"wprowadź język",
                placeholdertxt:"", //:"wprowadź język",
            },
            comments:{
                labeltxt:"Komentarze",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //:"Gender comments",
            },
            country:{
                labeltxt:"Kraj",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //:"Insert Country",
            },
            gender:{
                labeltxt:"płeć",
                alternativ:{
                    alt1:"Żeńska",
                    alt2:"Męski",
                    alt3:"Inny"
                },
                hlptxt:"", //"wprowadź płeć",
                placeholdertxt:"", //:"wprowadź płeć",
            },
            firstname:{
                labeltxt:"Imię",
                hlptxt:"", //"Wpisz swoje imię",
                placeholdertxt:"", //:"Wpisz swoje imię",
            },
            lastname:{
                labeltxt:"Nazwisko",
                hlptxt:"", //"Wpisz swoje nazwisko",
                placeholdertxt:"", //:"Wpisz swoje nazwisko",
            },
            befatting:{
                labeltxt:"Zawód",
                hlptxt:"", //"Podaj swoją pozycję",
                placeholdertxt:"", //:"Podaj swoją pozycję",
            },
            profession:{
                labeltxt:"Zawód",
                hlptxt:"", //"Podaj swoją pozycję",
                placeholdertxt:"", //:"Podaj swoją pozycję",
            },
            organisation:{
                labeltxt:"Organizacja",
                hlptxt:"", //"Organizacja",
                placeholdertxt:"", //:"Organizacja",
            },
            email:{
                labeltxt:"E-mail",
                hlptxt:"", //"Wpisz adres e-mail",
                placeholdertxt:"", //:"Wpisz adres e-mail",
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
            btnabouttoStart:{
                btntext:"Zaczynajmy!"
            },
            btnepisode14Evaluation:{
                btntext:"Powiem ci, co myślę..."
            },
            btnallepisodes:{
                btntext:"Wszystkie odcinki",
                btnBefore:"Poprzedni",
                btnNext:"Kolejny"
            },
            btnpartartists:{
                btntext:"Artyści biorący udział"
            },
            allWorksheets:{
                btntext:"Pobierz wszystkie arkusze (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNUOVdSVVdUNzU2QUVSSDdQVU03UVY4VVJWSS4u"
            }
        },
        {
            type: "DE",
            header:{
                text:"Registrieren!"
            },
            lang:{
                labeltxt:"Sprache",
                hlptxt:"", //"Sprache eingeben",
                placeholdertxt:"", //:"Sprache eingeben",
            },
            comments:{
                labeltxt:"Bemerkungen",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //:"Gender comments",
            },
            country:{
                labeltxt:"Land",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //:"Insert Country",
            },
            gender:{
                labeltxt:"Geschlecht",
                alternativ:{
                    alt1:"Weiblich",
                    alt2:"Männlich",
                    alt3:"Andere"
                },
                hlptxt:"", //"Geben Sie das Geschlecht ein",
                placeholdertxt:"", //:"Geben Sie das Geschlecht ein",
            },
            firstname:{
                labeltxt:"Vorname",
                hlptxt:"", //"Vorname einfügen",
                placeholdertxt:"", //:"Vorname einfügen",
            },
            lastname:{
                labeltxt:"Nachname",
                hlptxt:"", //"Nachname einfügen",
                placeholdertxt:"", //:"Nachname einfügen",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"", //"Position eingeben",
                placeholdertxt:"", //:"Position eingeben",
            },
             profession:{
                labeltxt:"Position",
                hlptxt:"", //"Position eingeben",
                placeholdertxt:"", //:"Position eingeben",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"", //"Fügen Sie Ihre Organisation ein",
                placeholdertxt:"", //:"Fügen Sie Ihre Organisation ein",
            },
            email:{
                labeltxt:"Email",
                hlptxt:"", //"Geben Sie eine E-Mail-Adresse ein",
                placeholdertxt:"", //:"Geben Sie eine E-Mail-Adresse ein",
            },
            submit:{
                btntext:"Ja, ich würde gerne teilnehmen..."
            },
            btnwelcometoAbout:{
                btntext:"Ich will mehr wissen!"
            },
            btnwelcometoOverview:{
                btntext:"Ich kann es kaum erwarten. Lass uns gehen!"
            },
            btnoverviewtoStart:{
                btntext:"Jetzt den Kurs beginnen!"
            },
            btnabouttoStart:{
                btntext:"Jetzt geht es los!"
            },
            btnepisode14Evaluation:{
                btntext:"Lass mich dir sagen, was ich denke..."
            },
            btnallepisodes:{
                btntext:"Alle Folgen",
                btnBefore:"Bisherige",
                btnNext:"Nächster"
            },
            btnpartartists:{
                btntext:"Teilnehmende Künstler"
            },
            allWorksheets:{
                btntext:"Laden Sie alle Arbeitsblätter herunter (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNUODgyNkowV0xTVlVNNUtGTklWRU9TOUxUTy4u"
            }
        },
        {
            type: "FR",
            header:{
                text:"Oui, j'aimerais participer..."
            },
            lang:{
                labeltxt:"Langue",
                hlptxt:"", //"Entrez la langue",
                placeholdertxt:"", //:"Entrez la langue",
            },
            comments:{
                labeltxt:"Commentaires",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //:"Gender comments",
            },
            country:{
                labeltxt:"Pays",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //:"Insert Country",
            },
            gender:{
                labeltxt:"le genre",
                alternativ:{
                    alt1:"femelle",
                    alt2:"mâle",
                    alt3:"Autre"
                },
                hlptxt:"", //"Entrez le sexe",
                placeholdertxt:"", //:"Entrez le sexe",
            },
            firstname:{
                labeltxt:"Prénom",
                hlptxt:"", //"Insérez votre prénom",
                placeholdertxt:"", //:"Insérez votre prénom",
            },
            lastname:{
                labeltxt:"Nom de famille",
                hlptxt:"", //"Insérez votre nom",
                placeholdertxt:"", //:"Insérez votre nom",
            },
            befatting:{
                labeltxt:"Position",
                hlptxt:"", //"Entrer la position",
                placeholdertxt:"", //:"Entrer la position",
            },
            profession:{
                labeltxt:"Position",
                hlptxt:"", //"Entrer la position",
                placeholdertxt:"", //:"Entrer la position",
            },
            organisation:{
                labeltxt:"Organisation",
                hlptxt:"", //"Insérez votre organisation",
                placeholdertxt:"", //:"Insérez votre organisation",
            },
            email:{
                labeltxt:"E-mail",
                hlptxt:"", //"Insérer une adresse e-mail",
                placeholdertxt:"", //:"Insérer une adresse e-mail",
            },
            submit:{
                btntext:"S'inscrire"
            },
            btnwelcometoAbout:{
                btntext:"Je veux en savoir plus"
            },
            btnwelcometoOverview:{
                btntext:"Je ne peux pas attendre. Allons-y!"
            },
            btnoverviewtoStart:{
                btntext:"Je veux commencer !"
            },
            btnabouttoStart:{
                btntext:"Commençons!"
            },
            btnepisode14Evaluation:{
                btntext:"Laissez-moi vous dire ce que je pense..."
            },
            btnallepisodes:{
                btntext:"Tous les épisodes",
                btnBefore:"précédent",
                btnNext:"prochain"
            },
            btnpartartists:{
                btntext:"Artistes participants"
            },
            allWorksheets:{
                btntext:"Télécharger toutes les feuilles de travail (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNUNlhVT0NQRVhHT1ZCOE5IMjMwNEs3SFZHUy4u"
            }
        },
        {
            type: "SP",
            header:{
                text:"Sí, me gustaría participar..."
            },
            lang:{
                labeltxt:"Idioma",
                hlptxt:"", //"Ingrese idioma",
                placeholdertxt:"", //:"Ingrese idioma",
            },
            comments:{
                labeltxt:"Comentarios",
                hlptxt:"", //"Gender comments",
                placeholdertxt:"", //:"Gender comments",
            },
            country:{
                labeltxt:"País",
                hlptxt:"", //"Insert Country here",
                placeholdertxt:"", //:"Insert Country",
            },
            gender:{
                labeltxt:"Sexo",
                alternativ:{
                    alt1:"Mujer",
                    alt2:"Hombre",
                    alt3:"Otro"
                },
                hlptxt:"", //"Ingrese género",
                placeholdertxt:"", //:"Ingrese género",
            },
            firstname:{
                labeltxt:"Primer nombre",
                hlptxt:"", //"Inserta tu nombre",
                placeholdertxt:"", //:"Inserta tu nombre",
            },
            lastname:{
                labeltxt:"Apellido",
                hlptxt:"", //"Inserta tu apellido",
                placeholdertxt:"", //:"Inserta tu apellido",
            },
            befatting:{
                labeltxt:"Profesión",
                hlptxt:"", //"Ingrese la posición",
                placeholdertxt:"", //:"Ingrese la posición",
            },
            profession:{
                labeltxt:"Posición",
                hlptxt:"", //"Ingrese la posición",
                placeholdertxt:"", //:"Ingrese la posición",
            },
            organisation:{
                labeltxt:"Organización",
                hlptxt:"", //"Organización",
                placeholdertxt:"", //:"Organización",
            },
            email:{
                labeltxt:"Email",
                hlptxt:"", //"Insertar una dirección de correo electrónico",
                placeholdertxt:"", //:"Insertar una dirección de correo electrónico",
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
            btnabouttoStart:{
                btntext:"¡Empecemos!"
            },
            btnepisode14Evaluation:{
                btntext:"Déjame decirte lo que pienso..."
            },
            btnallepisodes:{
                btntext:"Todos los episodios",
                btnBefore:"Anterior",
                btnNext:"próximo"
            },
            btnpartartists:{
                btntext:"Artistas participantes"
            },
            allWorksheets:{
                btntext:"Descargar todas las hojas de trabajo (zip)"
            },
            trippuslink:{
                btntext:"https://forms.office.com/Pages/ResponsePage.aspx?id=VaJi_CBC5EebWkGO7jHaX54Y88cPA-9MuhufCsvXBbNURVZYTlVSMVVSRURBUks4WkZHV05DM08wSy4u"
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
