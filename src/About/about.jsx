import React, { useRef, useEffect } from "react";
import Logo from "../assets/LOGO.png";
import About1 from "../assets/about1.jpeg";
import About2 from "../assets/about2.jpeg";
import About3 from "../assets/about1.jpeg";
import About4 from "../assets/about2.jpeg";
import About5 from "../assets/about1.jpeg";
import PartnerLogo from "../assets/mobiuz.png";
import { Rocket } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

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
    <div className="bg-[#011727] text-white pt-30 py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <img
          src={Logo}
          alt="Company Logo"
          className="h-30 md:h-38 mx-auto mb-4"
        />
      </div>
      <div className="max-w-[1200px] mx-auto text-left mb-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          About BHA
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-3xl">
          Every big company needs to thank not only itself, but also those who
          have stood beside it and believed in it. After all, the most important
          principle in our work is trust.
        </p>
        <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-3xl">
          Every big company needs to thank not only itself, but also those who
          have stood beside it and believed in it. After all, the most important
          principle in our work is trust.
        </p>
        <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-3xl">
          Every big company needs to thank not only itself, but also those who
          have stood beside it and believed in it. After all, the most important
          principle in our work is trust.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center mb-24 px-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">12000+</h3>
          <p className="mt-2">Project Complete</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">29000+</h3>
          <p className="mt-2">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">35000+</h3>
          <p className="mt-2">Win Awards</p>
        </div>
      </div>

      <div className="bg-[#012B3D] rounded-xl p-6 md:p-12 max-w-[1200px] mx-auto mb-32 shadow-lg relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          About BHA
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-3xl text-center md:text-left">
          Every big company needs to thank not only itself, but also those who
          have stood beside it and believed in it.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="mb-4 custom-swiper"
        >
          {[About1, About2, About3, About4, About5].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="rounded-xl shadow-lg object-cover h-[300px] md:h-[400px] w-full transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-center mt-10">
          <div className="w-2/3 md:w-1/2 h-2 bg-white/30 rounded-full relative">
            <div
              ref={progressRef}
              className="h-2 bg-teal-400 rounded-full transition-all duration-300"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>

      <section className="max-w-[1200px] mx-auto text-center px-4 mb-20">
        <h3 className="text-sm text-teal-500 font-semibold mb-2 uppercase tracking-wide">
          OUR PARTNERS
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Companies that believe in us
        </h2>
        

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-[#012B3D] rounded-xl p-4 shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={PartnerLogo}
                alt={`Partner ${i + 1}`}
                className="mx-auto h-12 md:h-20"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 bg-[#011727] flex flex-col items-center justify-center gap-6 max-w-[1200px] mx-auto mb-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Stay in the know:
        </h2>
        <div className="bg-[#012B3D] text-white p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#011727] text-white rounded-md p-2 w-full sm:flex-1"
          />
          <input
            type="text"
            placeholder="+998 -- --- -- --"
            className="bg-[#011727] text-white rounded-md p-2 w-full sm:flex-1"
          />
          <button className="bg-teal-400 flex flex-row gap-2 text-white px-10 py-2 rounded-lg hover:bg-teal-300 transition-colors w-full sm:w-auto">
            Submit <Rocket size={16}  />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
