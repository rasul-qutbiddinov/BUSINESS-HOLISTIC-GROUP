import React, { useState } from "react";
import { MapPin, Mail, Phone, Rocket, CheckCircle } from "lucide-react";
import { GoogleMap, LoadScriptNext, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useParseHTML from "../components/hooks";
import { ContactTranslations } from "../data/translations"; // ✅ Tarjimalar

const Contact = () => {
  const { parseHTMLString } = useParseHTML();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showNotification, setShowNotification] = useState(false);
  const { lang } = useParams(); // ✅ Tilni olish

  const onSubmit = (formData) => {
    console.log(formData);
    setShowNotification(true);
    reset();
    setTimeout(() => setShowNotification(false), 3000);
  };

  const { error, data, isError, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(
        "https://back.holistic.saidoff.uz/api/collections/services/records?expand=title"
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <p className="text-white text-center">Yuklanmoqda...</p>;
  }

  if (isError) {
    console.error("Error fetching data:", error);
    return <p className="text-white text-center">Xatolik yuz berdi...</p>;
  }

  const records = data?.items || [];

  return (
    <div className="pt-32 px-4 md:px-8 lg:px-16 xl:px-24 relative">
      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-5 py-3 rounded-lg flex items-center gap-2 shadow-lg animate-slide-in">
          <CheckCircle size={20} /> {ContactTranslations.successMessage[lang]}
        </div>
      )}

      <section className="bg-[#012B3D] text-white py-12 md:py-16 px-6 md:px-12 rounded-xl max-w-[1200px] mx-auto mb-16 md:mb-24 shadow-lg">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
            {ContactTranslations.subheading[lang]}
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {ContactTranslations.heading[lang]}
          </h2>
          <p className="text-white/80 mx-auto">
            {ContactTranslations.description[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder={ContactTranslations.fullName[lang]}
              maxLength={15}
              onInput={(e) => {
                // Faqat harflarni qoldiramiz
                e.target.value = e.target.value.replace(
                  /[^a-zA-Zа-яА-ЯёЁ\s']/g,
                  ""
                );
              }}
              className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors"
              {...register("fullname", {
                required: "Full name is required",
                maxLength: {
                  value: 15,
                  message: "Maximum 15 characters allowed",
                },
              })}
            />

            {errors.fullname && (
              <span className="text-red-500">{errors.fullname.message}</span>
            )}

            <input
              type="email"
              placeholder={ContactTranslations.email[lang]}
              className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <select
              className="bg-[#011727] text-white rounded-md p-3 outline-none border-2 border-transparent focus:border-teal-500 transition-colors cursor-pointer"
              {...register("service", { required: "Please select a service" })}
            >
              <option value="">
                {ContactTranslations.selectService[lang]}
              </option>
              {records.map((services) => (
                <option
                  key={services.id}
                  value={
                    services.expand?.title?.[lang] ||
                    services.expand?.title?.uz ||
                    "No title available"
                  }
                >
                  {parseHTMLString(
                    services.expand?.title?.[lang] || "No title available"
                  )}
                </option>
              ))}
            </select>
            {errors.service && (
              <span className="text-red-500">{errors.service.message}</span>
            )}

            <button
              type="submit"
              className="bg-teal-400 text-white px-6 py-2 w-full md:w-48 rounded-lg hover:bg-teal-300 flex items-center justify-center gap-2 transition-colors"
            >
              {ContactTranslations.submit[lang]} <Rocket size={16} />
            </button>
          </form>

          <div className="w-full overflow-hidden">
            <LoadScriptNext
              googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
              loading="lazy"
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                loading="lazy"
                center={center}
                zoom={15}
                options={options}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScriptNext>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-white/80 mt-12">
          <div className="flex items-center gap-4">
            <MapPin size={24} className="text-teal-500" />
            <span>{ContactTranslations.address[lang]}</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-teal-500" />
            <span>{ContactTranslations.emailAddress[lang]}</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-teal-500" />
            <span>{ContactTranslations.phone[lang]}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

const center = {
  lat: 41.3335781,
  lng: 69.2430154,
};

const options = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#012B3D" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#012B3D" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#013D54" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#011727" }],
    },
  ],
};
