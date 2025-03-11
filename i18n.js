import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // JSON fayllarni yuklash uchun
  .use(LanguageDetector) // Brauzer tilini aniqlash uchun
  .use(initReactI18next) // React bilan bog‘lash uchun
  .init({
    supportedLngs: ["eng", "rus", "uzb"], // Mavjud tillar
    fallbackLng: "uzb", // Standart til
    debug: true,
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // JSON fayllarni yuklash
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
