import React from "react";
import { Facebook, Instagram, Linkedin, Send, ChevronUp } from "lucide-react";
import Logo from "../assets/LOGO.png";
import { useLanguage } from "../languageContext";
import { FooterTranslations } from "../data/translations";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language: lang } = useLanguage();


  return (
    <footer className="bg-[#012B3D] text-white pt-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-6">
        {/* TOP PART */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left: nav + social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
              {Object.entries(FooterTranslations).map(([key, value]) => (
                <Link
                  key={key}
                  to={`/${lang}/${key}`}
                  className="hover:text-teal-400 transition-colors uppercase tracking-wide"
                >
                  {value[lang]}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/rasul-qutbiddinov/"
                className="hover:text-teal-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          {/* Right: Email & Phone */}
          <div className="flex flex-row items-center md:items-end justify-center gap-8 text-sm text-white/80">
            <a
              href="mailto:businessholistic@group"
              className="hover:text-teal-400 transition"
            >
              businessholistic@group
            </a>
            <a
              href="tel:+998997776655"
              className="hover:text-teal-400 transition"
            >
              +998 99 777 66 55
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 " />

        {/* Bottom Part: logo + privacy */}
        <div className="flex flex-row ml-5 mr-5 md:flex-row justify-between items-center gap-4 pb-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="h-10 md:h-12 w-10 md:w-32 object-contain"
            />
          </div>
          {/* Privacy */}
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
