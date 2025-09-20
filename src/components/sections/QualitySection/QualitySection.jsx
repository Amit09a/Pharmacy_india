import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const QualitySection = () => {
  const logos = [
    "/assets/images/16968477923269.png",
    "/assets/images/16968477994180.png",
    "/assets/images/16968478068881.png",
    "/assets/images/16968478131333.png",
    "/assets/images/16968478205840.png",
    "/assets/images/16968478285084.png",
    "/assets/images/16968478332243.png",
    "/assets/images/16968478409493.png",
  ];

  // Duplicate logos array for infinite flow
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="relative max-w-6xl mx-auto bg-white backdrop-blur-md p-8 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="relative">
          {/* Background icon */}
          <div
            className="absolute left-0 top-0 w-20 h-20 opacity-70"
            style={{
              backgroundImage:
                "url('https://www.indizenpharma.com/wp-content/uploads/2024/07/Artboard-8.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
          <h4 className="text-lg font-semibold text-gray-800 relative z-10">
            Quality You can Trust!
          </h4>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-4 leading-snug relative z-10">
            Reflecting our dedication to the{" "}
            <span className="italic">best practices and superior performance</span>
          </h2>
        </div>

        {/* Right Logos - Marquee Effect */}
        <div className="overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            allowTouchMove={false}
          >
            {marqueeLogos.map((logo, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-16 md:h-20 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
