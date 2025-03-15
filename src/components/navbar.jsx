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
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleChangeLanguage = (selectedLang) => {
    changeLanguage(selectedLang);
    setDropdownOpen(false);

    // URL orqali hozirgi path-ni aniqlash va tilni yangilash
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
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-4 bg-[#012B3D] shadow-md w-full">
        <Link to={`/${lang}`} className="flex items-center gap-2 max-w-xs">
          <img src={Logo} className="h-12 w-auto md:h-20 md:w-40" alt="Logo" />
        </Link>

        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium bg-[#1B4055] text-white px-4 py-2 lg:px-6 rounded-[30px] mx-auto justify-center">
          {NavbarData.map((item, index) => (
            <li key={index} className="hover:text-teal-300 cursor-pointer">
              <Link to={`/${lang}/${item.text}`}>
                {NavbarTranslations[item.text][lang]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 absolute right-15 md:relative">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px]"
            >
              🌐 {lang}
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
        </div>

        <button
          className="md:hidden text-white absolute right-4"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#012B3D] text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 shadow-lg`}
      >
        <button
          className="text-white text-3xl m-4"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={30} />
        </button>

        <ul className="flex flex-col gap-4 px-8 py-4 text-lg">
          {NavbarData.map((item, index) => (
            <li key={index} className="hover:text-teal-300 cursor-pointer">
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
