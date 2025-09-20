import React from "react";
import HeroSection from "../HeroSection/HeroSection";

const FeaturesSection = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center max-w-6xl mx-auto bg-white/10 backdrop-blur-md shadow-lg p-6 sm:p-8"
        style={{
          backgroundImage: "url('/assets/images/offering-bg.5c54d2f0.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  src="/assets/images/Who-we-are.png"
                  alt="Who we are"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-blue-300 pb-2 inline-block">
                Who we are
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                Indizen Pharma is a top pharmaceutical company that engaged in
                trading, manufacturing, and distribution of quality products.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  src="/assets/images/PCD-Pharma-Franchise.png"
                  alt="PCD Pharma Franchise"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-blue-300 pb-2 inline-block">
                PCD Pharma Franchise
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                We provide pharma franchise opportunities, boosting growth
                through marketing strategies and quality products.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  src="/assets/images/Research-Innovation2.png"
                  alt="Research & Innovation"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-blue-300 pb-2 inline-block">
                Research & Innovation
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                Our R&D introduces novel formulations and enhances existing ones
                to meet evolving healthcare needs.
              </p>
            </div>

            <div className="text-center text-white">
              <div className="flex justify-center mb-4">
                <img
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                  src="/assets/images/Competitive-Pricing-2.png"
                  alt="Competitive Pricing"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 border-b-2 border-blue-300 pb-2 inline-block">
                Competitive Pricing
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                We ensure medicines remain accessible without compromising
                quality, maintaining high standards with fair pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center max-w-6xl mx-auto bg-gradient-to-b from-white via-sky-200 to-sky-300 backdrop-blur-md shadow-lg p-6 sm:p-8"
        style={{
          backgroundImage:
            "url('/assets/images/about-us-infographics.b65825f0.webp')",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <img src="/assets/images/abt-us.png" alt="About Us" />
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">
              Welcome to <span className="italic">Indizen Pharmaceutical</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-500 italic mb-4 sm:mb-6">
              Leading Pharma Company in India
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
              In 2010, a group of passionate individuals came together to
              establish Indizen Pharma with the aim of revolutionizing the
              pharmaceutical industry. Their insights catalyze breakthroughs in
              healthcare that may affect future generations.
            </p>
            <button className="bg-sky-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-sky-900 transition">
              About Us
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/images/Indizen-Pharmaceutical-a-2-7.webp"
              alt="About Us"
              className="w-64 sm:w-80 md:w-[450px] object-contain"
            />
          </div>
        </div>
        <HeroSection />
      </section>
    </div>
  );
};

export default FeaturesSection;
