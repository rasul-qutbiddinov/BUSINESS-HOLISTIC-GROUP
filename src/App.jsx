import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Home from "./Home/home";
import About from "./About/about";
import Services from "./Services/services";
import Contact from "./Contact/contact";
import Comments from "./Comments/comments";
import BackToTopButton from "./components/Back-to-top";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
