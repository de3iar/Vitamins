import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const i18n = i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        // whitelist: ['en', 'el'],
        preload: ['en'],
        ns: [
            "ascoder_advanced",
            "ascoder_example",
            "ascoder_intro",
            "ascoder_Infomations",
            "ascoder_quickstart",
            "asrigger_withVitamins",
            "asrigger_Distribution",
            "asvtb_impAndLoad",
            "asvtb_knowledge",
            "asvtb_prefix",
            "faq",
            "about",
            "hero",
            "index",
            "start",
            "sidebarL"
        ],
        defaultNS: 'translations',
        fallbackNS: false,
        debug: false,
        detection: {
            order: ['querystring', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lang',
        },
        backend: {
            loadPath: './i18n/{{lng}}/{{ns}}.json',
        }
    }, (err, t) => {
        if (err) return console.error(err)
    });
export default i18n;