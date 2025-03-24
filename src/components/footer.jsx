import React from "react";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import Logo from "../assets/LOGO.png";
import { useLanguage } from "../languageContext"; // ✅ Tilni olish
import { FooterTranslations } from "../data/translations"; // ✅ Tarjimalarni olish
import { Link } from "react-router-dom";

const Footer = () => {
  const { language: lang } = useLanguage(); // 🔹 Hozirgi tilni olish

  return (
    <div className="container mx-auto px-4 md:px-8">
      <footer className="bg-[#012B3D] text-white py-6 md:py-8 mt-0">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex flex-col items-center gap-6 md:gap-8">
          {/* Yuqori qism: Navigatsiya va Ijtimoiy tarmoqlar */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
              {Object.entries(FooterTranslations).map(([key, value]) => (
                <Link
                  key={key}
                  to={`/${lang}/${key}`} // 🔹 Har bir sahifaga mos yo‘naltirish
                  className="hover:text-teal-400 transition-colors"
                >
                  {value[lang]} {/* 🔥 Tarjima chiqariladi */}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/rasul-qutbiddinov/"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-teal-400 transition-colors"
              >
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Pastgi qism: Logo va aloqa ma’lumotlari */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-6 border-t border-white/20 pt-4 md:pt-6 text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img
                src={Logo}
                alt="Logo"
                className="h-10 md:h-12 w-10 md:w-12 object-contain"
              />
              <span className="text-sm text-white/80">
                BUSINESS HOLISTIC GROUP
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/80">
              <a
                href="mailto:businessholistic@group"
                className="hover:text-teal-400 transition-colors"
              >
                businessholistic@group
              </a>
              <span className="hidden sm:block">|</span>
              <a
                href="tel:+998997776655"
                className="hover:text-teal-400 transition-colors"
              >
                +998 99 777 66 55
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
