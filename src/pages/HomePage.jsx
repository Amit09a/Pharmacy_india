import React, { Suspense, lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";


const FeaturesSection = lazy(() => import("../components/sections/FeaturesSection/FeaturesSection"));
const ProductCategoriesSection = lazy(() => import("../components/sections/ProductsSection/ProductsSection"));
const QualitySection = lazy(() => import("../components/sections/QualitySection/QualitySection"));
const AchivmentSection = lazy(() => import("../components/sections/AchivmentSection/AchivmentSection"));
const ProductCatalogueSection = lazy(() => import("../components/sections/ProductCatalogueSection/ProductCatalogueSection"));
const ContactSection = lazy(() => import("../components/sections/ContactForm"));
const BlogSection = lazy(() => import("../components/sections/BlogSection"));

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-50 to-white min-h-screen">
      {/* Fixed mini navbar */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-md rounded-full border px-4 py-2 mt-32 flex gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap">
        <HashLink smooth to="#features" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">About Us</HashLink>
        <HashLink smooth to="#categories" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">Category Catalogue</HashLink>
        <HashLink smooth to="#achievements" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">Our Achievements</HashLink>
        <HashLink smooth to="#products" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">Product Catalogue</HashLink>
        <HashLink smooth to="#testimonials" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">Contact form</HashLink>
        <HashLink smooth to="#blogs" className="text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600">Latest Blogs</HashLink>
      </div>

      {/* Swiper banner */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[500px] mt-20"
      >
        {["download (1) .webp","download.webp","download (2).webp","download (3).webp","download (4).webp","download (5).webp"].map((img,i)=>(
          <SwiperSlide key={i}>
            <div className="flex justify-center items-center h-[500px] bg-blue-100">
              <img src={`/assets/images/${img}`} alt={`slide-${i}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sections with Suspense fallback */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <motion.div id="features" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
          <FeaturesSection />
        </motion.div>

        <motion.div id="categories" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.2 }}>
          <ProductCategoriesSection />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.4 }}>
          <QualitySection />
        </motion.div>

        <motion.div id="achievements" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.6 }}>
          <AchivmentSection />
        </motion.div>

        <motion.div id="products" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 0.8 }}>
          <ProductCatalogueSection />
        </motion.div>

        <motion.div id="testimonials" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 1 }}>
          <ContactSection />
        </motion.div>

        <motion.div id="blogs" variants={sectionVariants} initial="hidden" animate="visible" transition={{ duration: 0.8, delay: 1.2 }}>
          <BlogSection />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default HomePage;
