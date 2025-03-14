import React, { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { NavbarData } from "../data";
import { NavbarTranslations } from "../data/translations";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { changeLanguage: translator, lang } = useLanguage();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const changeLanguage = (lang) => {
    setDropdownOpen(false);
    translator(lang);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-[#012B3D] shadow-md w-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 max-w-xs">
          <img src={Logo} className="h-12 w-auto md:h-20 md:w-40" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium bg-[#1B4055] text-white px-4 py-2 lg:px-6 rounded-[30px] mx-auto justify-center">
          {NavbarData.map((item) => (
            <li className="hover:text-teal-300 cursor-pointer">
              <Link
                to={`/${lang}/${item.text}`}
                onClick={() => changeLanguage(lang)}
              >
                {NavbarTranslations[item.text][lang]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Selector - ALWAYS VISIBLE */}
        <div className="flex items-center gap-4 absolute right-15 md:relative">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px] flex items-center"
            >
              🌐 {lang}
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-[#1B4055] text-white border border-teal-500 rounded-lg shadow-lg overflow-hidden z-50"
                ref={dropdownRef}
              >
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("en")}
                >
                  En
                </li>
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("uz")}
                >
                  Uz
                </li>
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("ru")}
                >
                  Ru
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Sidebar Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none absolute right-4"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#012B3D] text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 shadow-lg`}
      >
        <button
          className="text-white text-3xl m-4 focus:outline-none"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={30} />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 px-8 py-4 text-lg">
          {NavbarData.map((item) => (
            <li className="hover:text-teal-300 cursor-pointer">
              <Link
                to={`/${lang}/${item.text}`}
                onClick={() => setSidebarOpen(false)}
              >
                {NavbarTranslations[item.text][lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
