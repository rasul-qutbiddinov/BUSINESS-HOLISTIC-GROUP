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
          <p className="text-white/80 mx-auto">
            We develop websites with the high quality, from corporate websites
            to web applications. We develop websites with the high quality, from
            corporate websites to web applications.
          </p>
        </div>

        {/* Forma va karta */}
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

          {/* Karta */}
          <div className="w-full h-64 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.696155102328!2d69.34511667573774!3d41.307491271177105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cbdb9d27d3%3A0xf8a58d902aef8d09!2sQorasaroy%2039A!5e0!3m2!1sen!2s!4v1616342915924!5m2!1sen!2s&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0x212121&style=feature:road|element:geometry|color:0x2c2c2c&style=feature:landscape|element:geometry|color:0x1f1f1f"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Kontakt ma'lumotlari pastda */}
        <div className="flex flex-col gap-10 text-white/80 mt-12">
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
      </section>
    </div>
  );
};

export default Contact;
