import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class cookieLanguageHandler {    

    getCookieText(langtyp){
        
        if(!langtyp){
            langtyp="EN";
        };      
               
        return this.langtext().find(i => i.type === langtyp);      

    }

    langtext(){
        return [
            {
                type: "EN",
                cookietext:"On centrestageonline.org we use cookies to give you a great user experience. By browsing further you agree that we use cookies and browserstorage.",
                linktext:"Read more about cookies",
            },
            {
                type: "SV",
                cookietext:"På centrestageonline.org använder vi cookies för att ge dig en bra användarupplevelse. Genom att bläddra vidare godkänner du att vi använder cookies och browserstorage.",
                linktext:"Läs mer om kakor",
            },
            {
                type: "PL",
                cookietext:"Na centrestageonline.org używamy plików cookie, aby zapewnić doskonałą obsługę. Przeglądając dalej, zgadzasz się, że używamy plików cookie i przechowywanie w przeglądarce",
                linktext:"Przeczytaj więcej o plikach cookie",
            },
            {
                type: "DE",
                cookietext:"Auf centrestageonline.org verwenden wir Cookies, um Ihnen eine großartige Benutzererfahrung zu bieten. Wenn Sie weiter surfen, stimmen Sie zu, dass wir Cookies und Browserstorage verwenden.",
                linktext:"Lesen Sie mehr über Cookies und browserstorage",
            },
            {
                type: "FR",
                cookietext:"Sur centrestageonline.org, nous utilisons des cookies pour vous offrir une excellente expérience utilisateur. En poursuivant votre navigation, vous acceptez que nous utilisions des cookies et le stockage du navigateur.",
                linktext:"En savoir plus sur les cookies et stockage du navigateur",
            },
            {
                type: "SP",
                cookietext:"En centrestageonline.org utilizamos cookies para brindarle una excelente experiencia de usuario. Al navegar más, acepta que utilizamos cookies y almacenamiento en el navegador.",
                linktext:"Leer más sobre cookies y almacenamiento del navegador",
            },
        ]
    }
}