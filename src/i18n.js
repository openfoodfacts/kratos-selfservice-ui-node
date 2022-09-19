const i18next = require('i18next');
const HandlebarsI18n = require("handlebars-i18n");
HandlebarsI18n.init();
import resources from "./i18n/translations";

i18next.init({
	resources,
    fallbackLng: "en",
    lng : getLang()
});

//get lang from accept language header or ln param from url
function getLang(){

    //check for accept-language header
    const acceptln = navigator.language;
    if(acceptln != null){
        return acceptln;
    }

    //check if ln param
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.has('ln')){
        const ln = urlParams.get('ln');
        console.log(ln)
        return ln;
    }

    return "en";
}