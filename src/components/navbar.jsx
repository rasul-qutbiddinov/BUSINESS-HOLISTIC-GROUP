import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const closeSidebar = () => setSidebarOpen(false);

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
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/comments">Comments</Link>
          </li>
        </ul>

        {/* PC Language Button (o'ng tomon burchakda) */}
        <div className="hidden md:flex items-center gap-4 absolute right-10">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px] flex items-center"
            >
              🌐 ENG
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-[#1B4055] text-white border border-teal-500 rounded-lg shadow-lg overflow-hidden z-50"
                ref={dropdownRef}
              >
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Eng
                </li>
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Uzb
                </li>
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Rus
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Mobile Language Button (o'ng tomon burchakda, sidebar tashqarisida) */}
        <div className="md:hidden flex items-center absolute right-14">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#1B4055] text-white px-4 py-2 rounded-[30px] flex items-center"
            >
              🌐 ENG
            </button>
            {dropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-[#1B4055] text-white border border-teal-500 rounded-lg shadow-lg overflow-hidden z-50"
                ref={dropdownRef}
              >
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Eng
                </li>
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Uzb
                </li>
                <li className="px-6 py-2 hover:bg-teal-500 cursor-pointer transition">
                  Rus
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none absolute right-4"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Overlay (Sidebar uchun) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#012B3D] text-white transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 shadow-lg`}
      >
        <button
          className="text-white text-3xl m-4 focus:outline-none"
          onClick={closeSidebar}
        >
          <X size={30} />
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-4 px-8 py-4 text-lg">
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/about" onClick={closeSidebar}>
              About Us
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/services" onClick={closeSidebar}>
              Services
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/contact" onClick={closeSidebar}>
              Contact Us
            </Link>
          </li>
          <li className="hover:text-teal-300 cursor-pointer">
            <Link to="/comments" onClick={closeSidebar}>
              Comments
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-0 w-full text-center pb-4 border-t border-teal-500 mt-4">
          <div className="flex flex-col items-center gap-2 px-8 text-sm text-white/80 py-4">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-30 object-contain mb-2"
            />
            <a
              href="mailto:businessholistic@group"
              className="hover:text-teal-400 transition-colors"
            >
              businessholistic@group
            </a>
            <a
              href="tel:+998997776655"
              className="hover:text-teal-400 transition-colors"
            >
              +998 99 777 66 55
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
