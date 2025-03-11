import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Brauzerdagi mavjud tilni o‘qib olish yoki "uzb" ni tanlash
const savedLanguage = localStorage.getItem("i18nextLng") || "uzb";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        comments: "Comments",
      },
    },
    uzb: {
      translation: {
        home: "Bosh sahifa",
        about: "Biz haqimizda",
        services: "Xizmatlar",
        contact: "Kontakt",
        comments: "Izohlar",
      },
    },
    rus: {
      translation: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        contact: "Контакты",
        comments: "Комментарии",
      },
    },
  },
  lng: savedLanguage, // ❗ Sayt ochilganda "uzb" bo‘lsin
  fallbackLng: "uzb", // ❗ Agarda til mavjud bo‘lmasa, o‘zbek tiliga tushsin
  interpolation: {
    escapeValue: false,
  },
});

// ❗ Sayt ochilganda localStorage ga "uzb" ni saqlaymiz
if (!localStorage.getItem("i18nextLng")) {
  localStorage.setItem("i18nextLng", "uzb");
}

export default i18n;
