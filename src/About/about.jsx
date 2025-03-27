import React, { useState } from "react";
import { Rocket, CheckCircle, XCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import AboutHeader from "./about_header";
import Successe from "./success";
import Corusel from "./corusel";
import Partner from "./partner";
import { AboutContactTranslations } from "../data/translations";

const About = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [toast, setToast] = useState(null);
  const { lang } = useParams();

  const t = AboutContactTranslations;

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, "");
    if (!input.startsWith("998")) {
      setPhone("+998");
    } else {
      setPhone("+" + input);
    }
  };

  const handleSubmit = () => {
    if (name.trim() && phone.length >= 13) {
      setToast({
        type: "success",
        message: t.successMessage[lang] || t.successMessage.en,
      });
      setName("");
      setPhone("+998");
    } else {
      setToast({
        type: "error",
        message: t.errorMessage[lang] || t.errorMessage.en,
      });
    }

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="bg-[#011727] text-white pt-30 py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <AboutHeader />
      <Successe />
      <Corusel />
      <Partner />

      <section className="py-10 bg-[#011727] flex flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto mb-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {t.stayInTheKnow[lang] || t.stayInTheKnow.en}
        </h2>
        <div className="bg-[#012B3D] text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
          <input
            type="text"
            value={name}
            maxLength={15}
            onChange={(e) => {
              // Raqamlarni olib tashlaymiz
              const onlyLetters = e.target.value.replace(
                /[^a-zA-Zа-яА-ЯёЁ\s']/g,
                ""
              );

              setName(onlyLetters);
            }}
            placeholder={t.yourname[lang] || t.yourname.en}
            className="bg-[#011727] text-white rounded-md p-2 outline-none border-2 border-transparent focus:border-teal-500 transition-colors flex-1 w-full md:w-auto max-w-xs md:max-w-none h-[42px]"
          />
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={13}
            placeholder="+998 -- --- -- --"
            className="bg-[#011727] text-white rounded-md p-2 w-full sm:flex-1 h-[42px]"
          />
          <button
            onClick={handleSubmit}
            className="bg-teal-400 flex flex-row gap-2 text-white px-10 py-2 rounded-lg hover:bg-teal-300 transition-colors w-full sm:w-auto h-[42px]"
          >
            {t.submit[lang] || t.submit.en} <Rocket size={16} />
          </button>
        </div>

        {toast && (
          <div
            className={`fixed ${
              toast.type === "success" ? "bg-green-500" : "bg-red-500"
            } p-4 rounded-xl shadow-lg text-white flex items-center gap-2 transition-transform ${
              window.innerWidth < 768
                ? "bottom-10 left-1/2 transform -translate-x-1/2"
                : "bottom-10 right-15"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <XCircle size={20} />
            )}
            <span>{toast.message}</span>
          </div>
        )}
      </section>
    </div>
  );
};

export default About;
