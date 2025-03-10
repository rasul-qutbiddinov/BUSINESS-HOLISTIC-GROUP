import React, { useRef, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import About1 from "../assets/about1.jpeg";
import About2 from "../assets/about2.jpeg";
import About3 from "../assets/about1.jpeg";
import About4 from "../assets/about2.jpeg";
import About5 from "../assets/about1.jpeg";
import PartnerLogo from "../assets/mobiuz.png";
import { Rocket} from "lucide-react";

// ✅ Swiper kutubxonasini to'g'ri import qilamiz
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css"; // ✅ Custom CSS index.css da

const About = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const swiperContainer = document.querySelector(".custom-swiper");
    if (swiperContainer) {
      swiperContainer.swiper.on("slideChange", () => {
        const { activeIndex, slides } = swiperContainer.swiper;
        const progress = ((activeIndex + 1) / slides.length) * 100;
        if (progressRef.current) {
          progressRef.current.style.width = `${progress}%`;
        }
      });
    }
  }, []);

  return (
    <div className="bg-[#011727] text-white py-38 px-8">
      {/* Logo o'rtada */}
      <div className="text-center mb-12">
        <img src={Logo} alt="Company Logo" className="h-50 mx-auto mb-4" />
      </div>
      <div className="max-w-[1200px] mx-auto text-left mb-20 pl-8">
        <h2 className="text-4xl font-bold mb-8">About BHA</h2>
        <p className="text-white/80 text-lg mb-12 leading-relaxed max-w-3xl">
          Every big company needs to thank not only itself, but also those who
          have stood beside it and believed in it. After all, the most important
          principle in our work is trust.
          <br />
          <br />
          Every big company needs to thank not only itself, but also those who
          stood beside it and believed in it. After all, the most important
          principle in our work is trust.
          <br />
          <br />
          Every big company needs to thank not only itself, but also those who
          stood beside it and believed in it. After all, the most important
          principle in our work is trust.
        </p>
      </div>

      {/* Statistika bo'limi */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
        <div>
          <h3 className="text-4xl font-bold text-white/100">12000+</h3>
          <p className="text-white/100 mt-2">Project Complete</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white/100">29000+</h3>
          <p className="text-white/100 mt-2">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white/100">35000+</h3>
          <p className="text-white/100 mt-2">Win Awards</p>
        </div>
      </div>

      {/* Yangi div: fon sal to'qroq */}
      <div className="bg-[#012B3D] rounded-xl p-12 max-w-[1200px] mx-auto mb-32 shadow-lg relative">
        <div className="text-left mb-12 pl-8">
          <h2 className="text-4xl font-bold mb-4">About BHA</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-3xl">
            Every big company needs to thank not only itself, but also those who
            have stood beside it and believed in it. After all, the most
            important principle in our work is trust.
          </p>
        </div>

        {/* Swiper: Rasmlar uchun Carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false} /* ✅ Nuqtalar o'chirildi */
          breakpoints={{
            240: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="mb-4 custom-swiper"
        >
          <SwiperSlide>
            <img
              src={About1}
              alt="Team discussing"
              className="rounded-xl shadow-lg object-cover h-[400px] w-full transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={About2}
              alt="Team working"
              className="rounded-xl shadow-lg object-cover h-[400px] w-full transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={About3}
              alt="Team collaborating"
              className="rounded-xl shadow-lg object-cover h-[400px] w-full transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={About4}
              alt="Team collaborating"
              className="rounded-xl shadow-lg object-cover h-[400px] w-full transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={About5}
              alt="Team collaborating"
              className="rounded-xl shadow-lg object-cover h-[400px] w-full transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        </Swiper>

        {/* ✅ Progress bar: Rasmlar tagida */}
        <div className="w-full flex justify-center mt-10">
          <div className="w-1/2 h-2 bg-white/30 rounded-full relative">
            <div
              ref={progressRef}
              className="h-2 bg-teal-400 rounded-full transition-all duration-300"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
      <section className="max-w-[1200px] mx-auto text-left ">
        <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
          OUR PARTNERS
        </h3>
        <h2 className="text-3xl font-bold mb-12">
          Companies that believe in us
        </h2>

        {/* Partners grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-[#012B3D]  rounded-xl p-4 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={PartnerLogo}
                alt={`Partner ${i + 1}`}
                className="mx-auto h-20"
              />
            </div>
          ))}
        </div>
      </section>
      <section className=" py-20 pb-0 bg-[#011727] flex flex-col items-center justify-center gap-6 relative max-w-[1920px]">
        {/* Contact Us */}
        <div className="flex justify-between items-center w-full max-w-4xl mb-4">
          <h2 className="text-3xl font-bold text-white">Stay in the know:</h2>
          <a
            href="#contact"
            className="text-teal-500 text-sm font-semibold hover:underline"
          >
            CONTACT US
          </a>
        </div>

        {/* Barcha elementlarni bitta div ga oldik */}
        <div className="bg-[#012B3D] text-white p-10  rounded-2xl shadow-lg flex items-center gap-4 w-full max-w-4xl">
          {/* Forma (Ism va Telefon raqami va Submit) */}
          <div className="flex items-center gap-4 w-full ">
            {/* Ism inputi */}
            <input
              type="text"
              placeholder="Your name"
              className="bg-[#011727] text-white rounded-md p-2 outline-none border-2 border-transparent focus:border-teal-500 transition-colors flex-1 h-[42px]"
            />

            {/* Telefon raqami inputi */}
            <input
              type="text"
              placeholder="+998 -- --- -- --"
              inputMode="numeric"
              className="bg-[#011727] text-white rounded-md p-2 outline-none border-2 border-transparent focus:border-teal-500 transition-colors flex-1 h-[42px]"
            />

            {/* Submit tugmasi */}
            <button className="bg-teal-400 text-white px-6 py-0 rounded-lg hover:bg-teal-300 flex items-center gap-2 transition-colors h-[42px]">
              Submit <Rocket size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
