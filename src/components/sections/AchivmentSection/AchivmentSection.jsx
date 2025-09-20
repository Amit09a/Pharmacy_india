import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AchievementCard from "../../ui/AchievementCard";

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Rimovit Advertisement",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/LEADERSHIP-min.jpg",
    },
    {
      id: 2,
      title: "Achievement Certificate",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/URMIEVDA-min.jpg",
    },
    {
      id: 3,
      title: "Times Group Award",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/Tricity-Club-min.jpg",
    },
    {
      id: 4,
      title: "Best Quality Award",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/RIMOVITL-min.jpg",
    },
    {
      id: 5,
      title: "Excellence Certificate",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/National-Heallth-Biz-min.jpg",
    },
    {
      id: 6,
      title: "Industry Recognition",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/ISO-min.jpg",
    },
    {
      id: 7,
      title: "Quality Assurance",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/INDIAMART-min.jpg",
    },
    {
      id: 8,
      title: "Innovation Award",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/Health-Hub-of_-min.jpg",
    },
    {
      id: 9,
      title: "Health Excellence",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/Hawww-min.jpg",
    },
    {
      id: 10,
      title: "Customer Choice",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/Excellence-min.jpg",
    },
    {
      id: 11,
      title: "Growth Achievement",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/09/Asia-Business-min.jpg",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center max-w-6xl mx-auto bg-white/10 backdrop-blur-md shadow-lg p-8 mt-1"
      style={{
        background:
          "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          backgroundImage:
            "url('https://www.indizenpharma.com/wp-content/uploads/2024/07/Artboard-9.png')",
          backgroundSize: 60,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Section Header */}
        <div className="mb-12">
          {/* Icon with Our Achievements */}
          <div className="flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Achievements
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl">
            Indizen Pharma is the first PCD Pharma franchise company in
            Chandigarh, awarded Best Quality and fastest-growing pharma company
            by The Times of India and Indian actress Rakul Preet Singh.
          </p>
        </div>

        {/* Achievements Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10} // 👈 gap kam kiya
          slidesPerView={3}
          centeredSlides={false} // 👈 slides ko left align kiya
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15, // desktop pe thoda spacing
            },
          }}
          className="achievements-swiper"
        >
          {achievements.map((achievement) => (
            <SwiperSlide key={achievement.id}>
              <AchievementCard
                image={achievement.image}
                title={achievement.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AchievementsSection;
