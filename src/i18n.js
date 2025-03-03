import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import enTranslation from "./Assets/locales/en/translation.json";
import arTranslation from "./Assets/locales/ar/translation.json";
const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    resources,
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json", //...واللانغ لحالا بتقلب بين المجلدات عربي انكليزي يلي انا عاملتن..في حال في اي بي اي منحط الرابط هون
    },
  });

export default i18n;
