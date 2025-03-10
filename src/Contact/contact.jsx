import React from "react";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <section className="bg-[#012B3D] text-white py-12 md:py-16 px-6 md:px-12 rounded-xl max-w-[1200px] mx-auto mb-16 md:mb-24 shadow-lg">
        {/* Sarlavha va izoh */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
            For reference
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-white/80 mx-auto max-w-[800px]">
            We develop websites with the high quality, from corporate websites
            to web applications. We develop websites with the high quality, from
            corporate websites to web applications.
          </p>
        </div>

        {/* Forma va kontakt ma'lumotlari */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Forma */}
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Full name"
              className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors"
            />
            <select className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors cursor-pointer">
              <option value="" disabled selected>
                Service selection
              </option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">UI/UX Design</option>
              <option value="seo">SEO Optimization</option>
              <option value="ecommerce">E-commerce Solutions</option>
              <option value="cloud">Cloud Services</option>
            </select>
            <button
              type="submit"
              className="bg-teal-400 text-white px-6 py-2 w-full md:w-48 rounded-lg hover:bg-teal-300 flex items-center justify-center gap-2 transition-colors"
            >
              Submit <Rocket size={16} />
            </button>
          </form>

          {/* Kontakt ma'lumotlari */}
          <div className="flex flex-col gap-6 text-white/80">
            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-teal-500" />
              <span>Qorasaroy 39A</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-teal-500" />
              <span>saidoff@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-teal-500" />
              <span>+998 93 333 00 33</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
