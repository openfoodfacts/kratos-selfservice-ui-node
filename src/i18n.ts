const i18next = require('i18next');
const HandlebarsI18n = require("handlebars-i18n");
HandlebarsI18n.init();

i18next.init({
    // can eventually use json files
	resources : {
        "en" : {
            translation : {
                "Name": "Name",
            }
        },
        "fr" : {
            translation: {
                "Name": "Nom",
           }
        }
    },
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