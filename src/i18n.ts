const i18next = require('i18next');
const HandlebarsI18n = require("handlebars-i18n");
import resources from "./i18n/messages";

i18next.init({
	resources,
    fallbackLng: "en",
    lng : "en"
});

//get lang from accept language header or ln param from url
function getLang(){

    if(typeof window != "undefined"){
       //check for accept-language header
        const acceptln = window.navigator.language;
        if(acceptln != null){
            return acceptln;
        }

        //check if ln param
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        if(urlParams.has('ln')){
            const ln = urlParams.get('ln');
            return ln;
        }

        return "en";
    }
    
}

HandlebarsI18n.init();

export default i18next;