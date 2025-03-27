/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../languageContext";
import { NavbarData } from "../data";
import { NavbarTranslations } from "../data/translations";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language: lang, setLanguage: changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
      
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    document.body.style.overflow = !sidebarOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = !sidebarOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1];
    if (["uz", "ru", "en"].includes(pathLang)) {
      changeLanguage(pathLang);
    }
  }, [location.pathname]);

  const handleChangeLanguage = (selectedLang) => {
    changeLanguage(selectedLang);
    setDropdownOpen(false);
    closeSidebar();
    const currentPath = location.pathname.split("/").slice(2).join("/");
    navigate(`/${selectedLang}/${currentPath}`);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const closeSidebar = () => {
    setSidebarOpen(false);
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#012B3D] shadow-md w-full">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
          <Link to={`/${lang}`} className="flex items-center gap-2 max-w-xs">
            <img src={Logo} className="h-10 md:h-16 w-auto" alt="Logo" />
          </Link>

          {/* ✅ DESKTOP LINKS */}
          <ul className="hidden md:flex gap-4 lg:gap-8 font-medium bg-[#1B4055] text-white px-4 py-2 lg:px-6 rounded-[30px] mx-auto justify-center">
            {NavbarData.map((item, index) => {
              const path = `/${lang}/${item.text}`;
              const currentPath = location.pathname;

              const isHome =
                item.text === "/" &&
                (currentPath === `/${lang}` || currentPath === `/${lang}/`);

              const isActive = isHome || currentPath === path;

              return (
                <li
                  key={index}
                  className={`cursor-pointer transition-colors ${
                    isActive
                      ? "text-teal-400 font-semibold"
                      : "hover:text-teal-300"
                  }`}
                >
                  <Link to={path}>{NavbarTranslations[item.text][lang]}</Link>
                </li>
              );
            })}
          </ul>

          {/* ✅ LANGUAGE DROPDOWN */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px] hover:bg-teal-500 transition"
            >
              🌐 {lang.toUpperCase()}
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-[#1B4055] text-white border border-teal-500 rounded-lg shadow-lg overflow-hidden z-50"
                ref={dropdownRef}
              >
                {["en", "uz", "ru"].map((language) => (
                  <li
                    key={language}
                    className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                    onClick={() => handleChangeLanguage(language)}
                  >
                    {language.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ✅ BURGER MENU */}
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ✅ MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#012B3D] text-white transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50 shadow-lg`}
        >
          <button className="text-white text-3xl m-4" onClick={closeSidebar}>
            <X size={30} />
          </button>

          <ul className="flex flex-col gap-4 px-8 py-4 text-lg">
            {NavbarData.map((item, index) => {
              const path = `/${lang}/${item.text}`;
              const currentPath = location.pathname;

              const isHome =
                item.text === "/" &&
                (currentPath === `/${lang}` || currentPath === `/${lang}/`);

              const isActive = isHome || currentPath === path;

              return (
                <li
                  key={index}
                  className={`cursor-pointer transition-colors ${
                    isActive
                      ? "text-teal-400 font-semibold"
                      : "hover:text-teal-300"
                  }`}
                >
                  <Link to={path} onClick={closeSidebar}>
                    {NavbarTranslations[item.text][lang]}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ✅ LANGUAGE SWITCHER */}
          <div className="px-8 py-4">
            <p className="text-gray-400">Tilni tanlang:</p>
            <div className="flex gap-4 mt-2">
              {["en", "uz", "ru"].map((language) => (
                <button
                  key={language}
                  className={`px-4 py-2 rounded-full ${
                    lang === language
                      ? "bg-teal-500 text-white"
                      : "bg-[#1B4055] text-gray-300"
                  }`}
                  onClick={() => handleChangeLanguage(language)}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
