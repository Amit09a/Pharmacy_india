import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoreValuesSection from "../components/sections/CoreValuesSection/CoreValuesSection";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      offset: 80,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <section
        data-aos="fade-up"
        className="relative h-72 flex items-center mt-10 pt-10"
        style={{
          background: "linear-gradient(90deg, #e3f0fa 0%, #bcd8f4 100%)",
        }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 mt-10 pt-10"
          src="/assets/images/about-us-breadcrumb-.jpg"
          alt="Banner"
        />
        <div className="relative z-10 px-10 max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">About us</h1>
          <p className="text-base text-gray-700">
            <a href="/" className="underline mr-1 text-blue-700">
              Home
            </a>{" "}
            / About us
          </p>
          <img
            className="absolute right-10 top-5 w-72 rounded-lg hidden md:block"
            src="https://www.indizenpharma.com/wp-content/uploads/2024/07/company-logo-office-wall.png"
            alt="Logo Wall"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-12 pb-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 flex justify-center md:justify-start items-start md:items-center">
            <img
              data-aos="zoom-in"
              className="w-full max-w-md h-auto object-cover rounded-xl mt-6 md:mt-0"
              src="https://www.indizenpharma.com/wp-content/uploads/2024/07/About-us.webp"
              alt="About Us"
            />
          </div>
          <div data-aos="fade-left" className="flex-1 max-w-xl leading-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">About us</h2>
            <p className="italic font-medium mb-4 text-lg text-gray-700">
              15+ years of experience in marketing and distribution of
              quality-assured pharmaceuticals!
            </p>
            <p className="mb-2">
              Indizen Pharma is a leading pharmaceutical company, distributor, and
              manufacturer in India. The company started its journey two decades
              ago with the aim of transforming the pharmaceutical sector in India.
              Today, the company has state-of-the-art manufacturing units that
              develop 2500+ products with several brands and have 1000+ happy
              customers. With superior experience in the pharmaceutical industry,
              Indizen Pharma is a reliable name in the PCD Pharma sector across
              India and we are the first to introduce new molecules in the
              franchise industry and specialize in distributing pharmaceuticals,
              ayurveda herbal, dermatological, orthopaedic, health supplements,
              and allied products to various healthcare providers, pharmacies, and
              hospitals in PAN India.
            </p>
            <p className="mb-2">
              Hard work, determination, and the vision to explore new
              possibilities—that is what our story is built on. It all started
              with a single idea and one step, from which we moved to this point.
              It’s serving people, driving innovation, and contributing to our
              community that guides us every day. This commitment enables us to
              make a difference and stride toward a brighter future.
            </p>
            <p className="mb-2">
              Indizen Pharma offers the most lucrative{" "}
              <span className="font-bold">PCD pharma franchise</span> to those who
              are passionate about excelling in this field. The pharma franchise
              lends freedom to work as per chosen strategies, without any
              monthly targets, and with very little investment.
            </p>
            <p>
              By partnering with us, there is access to our marketing tools,
              a varied range of pharmaceutical products, glossaries, drug
              information, product samples, new product promotion, etc. We
              constantly strive to update ourselves by following the necessary
              protocols of the pharma industry. To learn more about the{" "}
              <span className="font-bold">
                PCD Pharma franchise business model
              </span>
              , contact us. Allow us to put forward our services, high-quality
              products, and franchise business opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-2">
            Our Founders
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="italic text-center mb-10">
            Leadership that Inspires Trust and Promotes Well-being!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right" className="bg-white rounded-lg shadow py-7 px-5 flex flex-col items-center">
              <img
                src="https://www.indizenpharma.com/wp-content/uploads/2024/07/Founder-icon-300x300.webp"
                alt="Gaurav Jain"
                className="w-20 mb-2 rounded-full"
              />
              <h4 className="font-bold text-xl text-blue-700 mb-2">
                Mr. Gaurav Jain
              </h4>
              <p>
                Mr. Gaurav Jain, co-founder of Indizen Pharma, has been in the
                health industry for over 15 years. His deep understanding of drugs
                plus commitment to quality have been important in propelling the
                success of the company. As a result of his administration, The
                Times of India awarded Indizen Pharma as a Best Quality as well as
                fastest-growing pharma company ever recorded.
              </p>
            </div>
            <div data-aos="fade-left" className="bg-white rounded-lg shadow py-7 px-5 flex flex-col items-center">
              <img
                src="https://www.indizenpharma.com/wp-content/uploads/2024/07/Founder-icon-300x300.webp"
                alt="Nikhil Tayal"
                className="w-20 mb-2 rounded-full"
              />
              <h4 className="font-bold text-xl text-blue-700 mb-2">
                Mr. Nikhil Tayal
              </h4>
              <p>
                Indizen Pharma’s co-founder, Mr. Nikhil Tayal, has almost 17+
                years’ experience in the pharmaceutical industry. His industry
                knowledge and strategic thinking have been crucial in driving the
                company’s growth. Mr. Nikhil Tayal has built Indizen Pharma’s
                strong reputation on quality and customer satisfaction. Besides,
                Mr. Nikhil’s efforts are recognized and appreciated through an
                acknowledgement from a famous Indian actress, Rakul Preet Singh.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div data-aos="fade-right" className="mb-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-center md:text-left mb-2">
              We are honored to be your trusted partner in creating a healthy
              world!
            </h3>
            <p>
              Indizen Pharma is led by a highly-skilled, forward-thinking team of
              “professionals” dedicated to the philosophy of good health and
              well-being. This dedication makes us one of India’s premier PCD
              Pharma franchises. Our team always ensures accuracy and uniformity
              in every item by using advanced technology and computerized
              facilities to check different quality parameters.
            </p>
          </div>
          <div className="flex-1 max-w-lg">
            <img
              data-aos="zoom-in"
              src="https://www.indizenpharma.com/wp-content/uploads/2024/07/We-are-honored-to-be-your.webp"
              alt="Trusted Partner"
              className="rounded-tl-[100px] rounded-br-[100px] w-full object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="flex-1">
            <h3 className="font-semibold text-xl text-center md:text-left mb-2">
              Enhancing lives with long-lasting health solutions
            </h3>
            <p>
              We are one of India’s renowned pharmaceutical companies dedicated to
              enhancing lives through innovative products; our renowned brands
              such as{" "}
              <span className="font-bold">
                Amy CV 625, Brilcure 90, Rimovitl, Urmiveda Pain Oil, and Vildazen
                Range
              </span>{" "}
              feature in our impressive product portfolio. Additionally,{" "}
              <span className="font-bold">
                Love Strings condoms and the futuristic Glmind range
              </span>
              , based on nanotechnology, are also among India’s best
              pharmaceutical brands.
            </p>
          </div>
          <div className="flex-1 max-w-lg">
            <img
              data-aos="zoom-in"
              src="https://www.indizenpharma.com/wp-content/uploads/2024/07/Enhancing-lives-with-long-lasting-health-solutions.webp"
              alt="Enhancing Lives"
              className="rounded-tr-[100px] rounded-bl-[100px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-12">
          <div data-aos="fade-right" className="flex flex-col items-start text-left w-full md:w-1/2">
            <img
              src="https://www.indizenpharma.com/wp-content/uploads/2024/08/mission-.webp"
              alt="Mission Icon"
              className="w-24 h-24 mb-3"
            />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              Indizen Pharma is driven by a strong commitment to enhance global
              health and well-being. Our mission is to provide innovative,
              science-backed healthcare products to pharma associates and fulfill
              their requirements.
            </p>
          </div>

          <div data-aos="zoom-in" className="w-full flex justify-center">
            <img
              src="/assets/images/missipn-viss-02.webp"
              alt="Logo Arrow"
              className="w-full max-w-4xl"
            />
          </div>

          <div data-aos="fade-left" className="flex flex-col items-end text-right w-full md:w-1/2">
            <img
              src="https://www.indizenpharma.com/wp-content/uploads/2024/08/Vission-.webp"
              alt="Vision Icon"
              className="w-24 h-24 mb-3"
            />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be a global pharmaceutical firm that prioritizes understanding
              human serious diseases and provide efficient healthcare solutions
              for all members of society. We are determined to do this by always
              making available products that conform to the highest quality
              standards.
            </p>
          </div>
        </div>
      </section>

      <div data-aos="fade-up">
        <CoreValuesSection />
      </div>
    </div>
  );
};

export default AboutPage;
