import React from "react";
import { MapPin, Mail, Phone, Rocket } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

// Yangi koordinatalar (Dublin, Ireland)
const center = {
  lat: 41.3335781, // Kenglik
  lng: 69.2430154, // Uzunlik
};

const Contact = () => {
  console.log("API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  return (
    <div className="pt-32 px-4 md:px-8 lg:px-16 xl:px-24">
      <section className="bg-[#012B3D] text-white py-12 md:py-16 px-6 md:px-12 rounded-xl max-w-[1200px] mx-auto mb-16 md:mb-24 shadow-lg">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
            For reference
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact us</h2>
          <p className="text-white/80 mx-auto">
            We develop websites with high quality, from corporate websites to
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

          {/* Google Map */}
          <div className="w-full h-64 rounded-md overflow-hidden">
            <LoadScript
              googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-white/80 mt-12">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-teal-500" />
            <span>Dublin, Ireland</span>
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
