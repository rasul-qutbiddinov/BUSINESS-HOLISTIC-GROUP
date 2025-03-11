import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-[#012B3D] shadow-md w-full max-w-full">
        <a href="/" className="flex items-center gap-2 max-w-xs">
          <img src={Logo} className="h-12 w-auto md:h-20 md:w-40" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium bg-[#1B4055] text-white px-4 py-2 lg:px-6 rounded-[30px] mx-auto justify-center">
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/">{t("home")}</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/about">{t("about")}</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/services">{t("services")}</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/contact">{t("contact")}</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/comments">{t("comments")}</Link>
          </li>
        </ul>

        {/* Language Selector */}
        <div className="hidden md:flex items-center gap-4 absolute right-10">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px] flex items-center"
            >
              🌐 {i18n.language.toUpperCase()}
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-[#1B4055] text-white border border-teal-500 rounded-lg shadow-lg overflow-hidden z-50"
                ref={dropdownRef}
              >
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("eng")}
                >
                  Eng
                </li>
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("uzb")}
                >
                  Uzb
                </li>
                <li
                  className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition"
                  onClick={() => changeLanguage("rus")}
                >
                  Rus
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
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              {t("home")}
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/about" onClick={() => setSidebarOpen(false)}>
              {t("about")}
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/services" onClick={() => setSidebarOpen(false)}>
              {t("services")}
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/contact" onClick={() => setSidebarOpen(false)}>
              {t("contact")}
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/comments" onClick={() => setSidebarOpen(false)}>
              {t("comments")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
