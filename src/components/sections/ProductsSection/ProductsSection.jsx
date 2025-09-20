import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCategoryCard from "../../ui/ProductCategoryCard";

const ProductCategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Dermatology",
      description:
        "This medication range is specially formulated to soothe and manage the symptoms of various skin disorders like eczema, psoriasis, itchiness and inflammation.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Dermatology.webp",
    },
    {
      id: 2,
      title: "Gastrointestinals",
      description:
        "Our medications help in relief symptoms of various gastrointestinal disorders like heartburn, bloating & indigestion.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Gastrointestinal.webp",
    },
    {
      id: 3,
      title: "Gynaecologicals",
      description:
        "This innovative range specially offers comprehensive solutions for women's health related issues such as menstrual periods and hormonal imbalances.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Gynaecologicals.webp",
    },
    {
      id: 4,
      title: "Injectable + IV Range",
      description:
        "Expertly designed for treating infections by directly delivering the medication into the bloodstream for rapid action.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Injectable-IV-Range.webp",
    },
    {
      id: 5,
      title: "Neuro Psychetric Range",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Neuro-Psychetric-Range.webp",
    },
    {
      id: 6,
      title: "Ointment or Cream Range",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Ointment-or-Cream-Range.webp",
    },
    {
      id: 7,
      title: "Opthalmic & Oralcare",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Opthalmic-Oralcare.webp",
    },
    {
      id: 8,
      title: "Orthopedic Range",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Orthopedic-Range.webp",
    },
    {
      id: 9,
      title: "OTC Products",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/OTC-Products.webp",
    },
    {
      id: 10,
      title: "Other Critical Products",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Other-Critical-Products.webp",
    },
    {
      id: 11,
      title: "Pediatric Range",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Pediatric-Range.webp",
    },
    {
      id: 12,
      title: "Respiratory & Anti-allergics",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Respiratory-Anti-allergics.webp",
    },
    {
      id: 13,
      title: "Sexual (EROTIC) Segment",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Sexual-EROTIC-Segment.webp",
    },
    {
      id: 14,
      title: "Supplements & Immunity Booster",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Supplements-Immunity-Booster.webp",
    },
    {
      id: 15,
      title: "Urology Products",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Urology-Products.webp",
    },
    {
      id: 16,
      title: "Anti Diabetes",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Anti-Diabetes.webp",
    },
    {
      id: 17,
      title: "Anti-infective",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Anti-Infective.webp",
    },
    {
      id: 18,
      title: "Antiinflammatory & Analgesics",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Antiinflammatory-Analgesics.webp",
    },
    {
      id: 19,
      title: "Ayurvedic & Herbal",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Ayurvedic-Herbal.webp",
    },
    {
      id: 20,
      title: "Cardiovascular",
      description:
        "Specially formulated to treat neuropsychiatric disorders such as depressive disorders, anxiety disorders and chronic pain.",
      image:
        "https://www.indizenpharma.com/wp-content/uploads/2024/07/Cardiovascular.webp",
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto backdrop-blur-md p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with BG Image */}
        <div
          className="text-left mb-12 relative"
          style={{
            backgroundImage: `url("https://www.indizenpharma.com/wp-content/uploads/2024/07/Artboard-7.png")`,
            backgroundSize: 45,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 relative z-10 ">
            Category Catalogue
          </h2>
          <h3 className="text-xl md:text-3xl text-gray-600 relative z-10">
            Our Product <span className="italic">Categories</span>
          </h3>
        </div>

        {/* Responsive Categories Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },    // phones
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            768: { slidesPerView: 3, slidesPerGroup: 3 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
            1280: { slidesPerView: 5, slidesPerGroup: 5 },    // desktop
          }}
          className="product-categories-swiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <ProductCategoryCard
                image={category.image}
                title={category.title}
                description={category.description}
                onClick={() => console.log(`Clicked on ${category.title}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
