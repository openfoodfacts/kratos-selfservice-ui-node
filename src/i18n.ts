const i18next = require('i18next');
const HandlebarsI18n = require("handlebars-i18n");
HandlebarsI18n.init();
import resources from "./i18n/messages";

i18next.init({
	resources,
    fallbackLng: "fr",
    lng : "fr"
});

//get lang from accept language header or ln param from url
function getLang(){

    if(typeof window != "undefined"){
       //check for accept-language header
        const acceptln = window.navigator.language;
        if(acceptln != null){
            console.log(`Accept ln is  ${acceptln}`)
            return acceptln;
        }

        //check if ln param
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if(urlParams.has('ln')){
            const ln = urlParams.get('ln');
            console.log(`Ln param is ${acceptln}`)
            return ln;
        }

        return "en";
    }
    
}

export default i18next;