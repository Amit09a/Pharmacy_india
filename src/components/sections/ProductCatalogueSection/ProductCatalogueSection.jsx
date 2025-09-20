import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCategoryCard from "../../ui/ProductCategoryCard";

const ProductCatalogueSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const products = [
    {
      id: 1,
      category: "OTC Products",
      title: "RIMOVITL",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/RIMOVITL-BOX.jpg"
    },
    {
      id: 2,
      category: "OTC Products", 
      title: "FATTYCUT FAT BURNER",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/FATTYCUT-FAT-BURNER.jpg"
    },
    {
      id: 3,
      category: "OTC Products",
      title: "GREEN TEA B.P CONTROL", 
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/GREEN-TEA-BP.jpg"
    },
    {
      id: 4,
      category: "OTC Products",
      title: "GREEN TEA DIABETIC CONTROL",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/GREEN-TEA-DIABETIC.jpg"
    },
  ];

  // Client testimonials videos data
  const testimonials = [
    {
      id: 1,
      videoUrl: "https://youtu.be/Jx2PX1qoYzo",
      thumbnail: "https://youtu.be/5BAZNAP4bsI",
      title: "Success Story 1"
    },
    {
      id: 2,
      videoUrl: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-2.mp4",
      thumbnail: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-2.jpg",
      title: "Client Testimonial 2"
    },
    {
      id: 3,
      videoUrl: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-3.mp4", 
      thumbnail: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-3.jpg",
      title: "Client Testimonial 3"
    },
    {
      id: 4,
      videoUrl: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-4.mp4",
      thumbnail: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-4.jpg", 
      title: "Client Testimonial 4"
    },
    {
      id: 5,
      videoUrl: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-5.mp4",
      thumbnail: "https://www.indizenpharma.com/wp-content/uploads/2024/08/testimonial-5.jpg",
      title: "Client Testimonial 5"
    }
  ];

  return (
    <section className="relative bg-cover bg-center max-w-6xl mx-auto backdrop-blur-md p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12"
        style={{
              backgroundImage:
                "url('https://www.indizenpharma.com/wp-content/uploads/2024/07/Artboard-10.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
        >
          {/* Icon with Product Catalogue */}
          <div className="flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Product Catalogue
            </h2>
          </div>
          
          {/* Products Title */}
          <h3 className="text-2xl md:text-3xl text-gray-600 border-b-2 border-gray-300 pb-2 inline-block">
            Our <span className="italic">Products</span>
          </h3>
        </div>

        {/* Products Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={4}
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
              slidesPerGroup: 1,
              spaceBetween: 20
            },
            640: { 
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 25
            },
            768: { 
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 25
            },
            1024: { 
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 30
            }
          }}
          className="products-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCategoryCard
                image={product.image}
                category={product.category}
                title={product.title}
                onClick={() => console.log(`Clicked on ${product.title}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Client Testimonials Section */}
        <div className="mt-16" 
          style={{ 
            background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)" 
          }}
        >
          {/* Testimonials Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Client Testimonials
              </h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl text-gray-600">
              What client says <span className="italic">about us</span>
            </h3>
          </div>

          {/* Main Video Player */}
          <div className="mb-8">
            <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
              <video 
                key={selectedVideo}
                className="w-full h-[400px] md:h-[500px] object-cover"
                controls
                poster={testimonials[selectedVideo]?.thumbnail}
              >
                <source src={testimonials[selectedVideo]?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedVideo === index 
                    ? 'ring-4 ring-blue-500 scale-105' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
                onClick={() => setSelectedVideo(index)}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.title}
                  className="w-full h-24 md:h-32 object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                {/* Active indicator */}
                {selectedVideo === index && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogueSection;
