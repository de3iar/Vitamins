import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { version } from '../package.json';

function getLangPath() {
    if (import.meta.env.MODE === 'development') {
        return `./i18n/{{lng}}/{{ns}}.json`
    }
    else {
        return `./lang/${version}/{{lng}}/{{ns}}.json`
    }
}
const i18n = i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        // whitelist: ['en', 'el'],
        preload: ['en'],
        ns: [
            "ascoder_advanced", "about", "ascoder_intro", "ascoder_Infomations", "ascoder_example", "ascoder_quickstart", "asrigger_Distribution", "asrigger_withVitamins", "asvtb_impAndLoad", "asvtb_prefix", "asvtb_knowledge", "asvtb_use", "hero", "faq", "comm", "index", "langs", "prefixAdvan", "req", "sidebarL", "start"
        ],
        defaultNS: 'translations',
        fallbackNS: false,
        debug: false,
        detection: {
            order: ['querystring', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lang',
        },
        backend: {
            loadPath: getLangPath(),
        }
    }, (err, t) => {
        if (err) return console.error(err)
    });
export default i18n;