  import { useEffect, useState } from "react";
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
  import { useQuery } from "@tanstack/react-query";
  import SocialMediaLoader from "../Loaders/HeaderSocialsL";

  export default function SocialMediaScroll() {
    const { error, data, isError, isLoading } = useQuery({
      queryKey: ["social_medias"],
      queryFn: () =>
        fetch(
          "https://back.holistic.saidoff.uz/api/collections/social_medias/records"
        ).then((res) => res.json()),
    });

    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
      if (data?.items) {
        const initial = data.items.map((item) => ({
          name: item?.name || "No Name",
          url: item?.url || "#",
        }));
        setVisibleItems(initial);
      }
    }, [data]);

    if (isLoading) return <SocialMediaLoader />;
    if (isError) {
      console.error("Error fetching data:", error);
      return <p className="text-white text-center">Xatolik yuz berdi...</p>;
    }

    const scrollRight = () => {
    if (visibleItems.length > 1) {
      const updated = [...visibleItems];
      const last = updated.pop(); // oxirgi elementni olamiz
      updated.unshift(last); // uni boshiga qo‘shamiz
      setVisibleItems(updated);
    }
    };

    const scrollLeft = () => {
      
      if (visibleItems.length > 1) {
        const updated = [...visibleItems];
        const first = updated.shift(); // birinchi elementni olamiz
        updated.push(first); // uni oxiriga qo‘shamiz
        setVisibleItems(updated);
      }
    };

    return (
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative w-[80%] mx-auto bg-[#04344F] py-3 mt-20 mb-0 rounded-full overflow-visible">
          {/* Left button */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-16 h-16 flex justify-center items-center bg-[#012235] rounded-full shadow-2xl border-2 border-[#012235]">
              <button
                onClick={scrollLeft}
                className="p-4 text-white bg-[#04344F] transition rounded-full"
              >
                <FaChevronLeft size={16} />
              </button>
            </div>
          </div>

          {/* Right button */}
          <div className="absolute -right-7 top-1/2 transform -translate-y-1/2 z-10">
            <div className="w-16 h-16 flex justify-center items-center bg-[#04273b] rounded-full shadow-2xl">
              <button
                onClick={scrollRight}
                className="p-4 text-white bg-[#033958] transition rounded-full"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Visible social media items */}
          <div className="flex items-center justify-start space-x-6 px-12 mx-auto overflow-x-hidden transition-all duration-300 ease-in-out">
            {visibleItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-medium inline-flex items-center hover:text-teal-400 transition"
              >
                {item.name}
                {index !== visibleItems.length - 1 && (
                  <span className="ml-6 text-gray-300">✰</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  } 
