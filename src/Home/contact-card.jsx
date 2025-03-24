import React, { useState } from "react";
import { Rocket, CheckCircle, XCircle } from "lucide-react";
import { HomeContactTranslations } from "../data/translations";
import { useLanguage } from "../languageContext"; // ✅ Contextdan foydalanamiz

const ContactCard = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [toast, setToast] = useState(null);

  const { lang } = useLanguage(); // ✅ lang context orqali

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
        message:
          HomeContactTranslations[lang]?.successMessage ||
          "Ma'lumot muvaffaqiyatli yuborildi!",
      });
      setName("");
      setPhone("+998");
    } else {
      setToast({
        type: "error",
        message:
          HomeContactTranslations[lang]?.errorMessage ||
          "Iltimos, to'liq ma'lumot kiriting!",
      });
    }

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="px-8 py-16 bg-white text-gray-800">
      <section className="px-4 md:px-8 py-8 md:py-12 bg-white flex flex-col items-center justify-center gap-6 relative max-w-[1920px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl mb-4 text-center sm:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {HomeContactTranslations[lang]?.stayInTheKnow || "Stay in the know"}
          </h2>
          <a
            href={`/${lang}/contacts`}
            className="text-teal-500 text-sm font-semibold hover:underline mt-2 sm:mt-0"
          >
            {HomeContactTranslations[lang]?.contactUs || "Contact Us"}
          </a>
        </div>

        <div className="bg-[#012B3D] text-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-4 w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="bg-[#011727] text-white rounded-md p-2 outline-none border-2 border-transparent focus:border-teal-500 transition-colors flex-1 w-full md:w-auto max-w-xs md:max-w-none h-[42px]"
            />
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="+998 -- --- -- --"
              inputMode="numeric"
              pattern="\+998[0-9]*"
              className="bg-[#011727] text-white rounded-md p-2 outline-none border-2 border-transparent focus:border-teal-500 transition-colors flex-1 w-full md:w-auto max-w-xs md:max-w-none h-[42px]"
            />

            <button
              onClick={handleSubmit}
              className="bg-teal-400 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-teal-300 flex items-center gap-2 transition-colors w-full md:w-auto h-[42px]"
            >
              {HomeContactTranslations[lang]?.submit || "Submit"}{" "}
              <Rocket size={16} />
            </button>
          </div>
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

export default ContactCard;
