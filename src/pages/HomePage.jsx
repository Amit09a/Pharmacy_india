import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import FeaturesSection from "../components/sections/FeaturesSection/FeaturesSection";
import ProductCategoriesSection from "../components/sections/ProductsSection/ProductsSection";
import QualitySection from "../components/sections/QualitySection/QualitySection";
import AchivmentSection from "../components/sections/AchivmentSection/AchivmentSection";
import ProductCatalogueSection from "../components/sections/ProductCatalogueSection/ProductCatalogueSection";
import ContactSection from "../components/sections/ContactForm";
import BlogSection from "../components/sections/BlogSection";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // start below
  visible: { opacity: 1, y: 0 }  // slide up
};

const HomePage = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white min-h-screen mt-25">
      {/* 🔹 Banner Slider Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px]"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-blue-100">
            <img src="/assets/images/download (1).png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-blue-100">
            <img src="/assets/images/download.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-pink-100">
            <img src="/assets/images/download (2).png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-blue-100">
            <img src="/assets/images/download (3).png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-blue-100">
            <img src="/assets/images/download (4).png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-[500px] bg-blue-100">
            <img src="/assets/images/download (5).png" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 🔹 Animated Sections */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ProductCategoriesSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <QualitySection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <AchivmentSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <ProductCatalogueSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ContactSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <BlogSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
