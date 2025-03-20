import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./Home/home";
import About from "./About/about";
import Services from "./Services/services";
import Contact from "./Contact/contact";
import Comments from "./Comments/comments";
import BackToTopButton from "./components/Back-to-top";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrolToTop"; // ✅ Scroll to top komponenti

export default function App() {
  return (
    <div className="min-h-screen bg-[#012B3D] relative">
      <Navbar />
      <ScrollToTop />{" "}
      {/* ✅ Har bir sahifa yuklanganda yuqoriga skroll qiladi */}
      <Routes>
        {/* 🌍 Default tilni `/uz` ga yo‘naltiramiz */}
        <Route path="/" element={<Navigate to="/uz" replace />} />

        {/* 📌 Barcha sahifalarni `:lang` ga bog‘laymiz */}
        <Route path="/:lang" element={<Home />} />
        <Route path=":lang/about" element={<About />} />
        <Route path=":lang/services" element={<Services />} />
        <Route path=":lang/contacts" element={<Contact />} />
        <Route path=":lang/comments" element={<Comments />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
