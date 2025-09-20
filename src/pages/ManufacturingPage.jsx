// src/pages/ManufacturingExcellencePage.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HERO_BANNER = "/assets/images/Manufacturing-Excellence.webp";
const IMG_MANUFACTURING =
  "https://www.indizenpharma.com/wp-content/uploads/2024/07/Manufacturing-Facility.webp";
const IMG_QAQC_BG = "/images/Screenshot-2025-09-21-at-2.44.09-AM.jpg";
const IMG_QUALITY_POLICY =
  "https://www.indizenpharma.com/wp-content/uploads/2024/07/Quality-Policy.webp";
const IMG_RND =
  "https://www.indizenpharma.com/wp-content/uploads/2024/07/Research-Development.webp";
const IMG_MONTAGE_3 =
  "https://www.indizenpharma.com/wp-content/uploads/2024/07/Highlights-of-our-production-unit-are-as-follows.webp";

export default function ManufacturingExcellencePage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      offset: 90,
      once: true,
    });
  }, []);

  return (
    <main className="relative bg-white text-gray-900">
      <section
        className="relative h-[320px] md:h-[380px] lg:h-[420px]"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <img
          src={HERO_BANNER}
          alt="Manufacturing Excellence banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
          <div data-aos="fade-up" data-aos-delay="150">
            <nav className="mb-3 text-base font-medium">
              <a href="/" className="text-sky-700 hover:underline">
                Home
              </a>
              <span className="mx-2 text-gray-700">/</span>
              <span className="text-gray-800">Manufacturing Excellence</span>
            </nav>
            <h1 className="text-4xl font-extrabold text-sky-900 md:text-5xl">
              Manufacturing{" "}
              <span className="bg-gradient-to-r from-sky-600 to-purple-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl gap-8 px-4 pb-6 md:grid md:grid-cols-2 md:items-start">
        <div className="relative" data-aos="fade-right">
          <img
            src={IMG_MANUFACTURING}
            alt="Manufacturing line"
            className="w-full rounded-[28px]"
          />
        </div>
        <div className="pt-6 md:pt-0" data-aos="fade-left" data-aos-delay="100">
          <h2 className="mb-3 text-4xl font-extrabold">Manufacturing Facility</h2>
          <p className="text-lg leading-8 text-gray-700">
            We have state-of-the-art facilities that employ cutting-edge
            manufacturing techniques to produce the best-in-class products. Our
            organization focuses on ensuring high quality and that is reflected
            in all our operations. Indizen Pharma’s manufacturing operations
            focus on producing Orthopedic range, derma range, cardiovascular,
            gastrointestinal, urology, ophthalmic, neuropsychiatric, and many
            other product ranges. These are available in a full range of dosage
            forms, which include tablets, capsules, injectables, powder for oral
            suspension and liquids. We use high-grade ingredients and
            sophisticated technology in the formulation process. This helps in
            furnishing quality formulations in PAN India. Owing to their
            features like accurate composition, no side effects and
            effectiveness, these products are widely demanded by hospitals and
            clinics.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h3 className="mb-6 text-3xl font-extrabold" data-aos="fade-up">
          Highlights of our production unit are as follows:
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ul className="space-y-6 text-lg text-gray-700" data-aos="slide-up">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-sky-600">»</span>
              Smart Manufacturing Systems and Automation
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-sky-600">»</span>
              Advanced technology for efficient production
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-sky-600">»</span>
              On-time delivery of products
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-sky-600">»</span>
              Ensure the best packaging of drugs.
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-sky-600">»</span>
              Self-sufficient capacities
            </li>
          </ul>
          <div className="flex items-center justify-end gap-6" data-aos="zoom-in-left">
            <img
              src={IMG_MONTAGE_3}
              alt="Logistics"
              className="h-45 w-full rounded-[26px] object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-b from-blue-100 to-white px-4 py-10 md:px-10"
        data-aos="zoom-in"
      >
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold">Quality Policy</h2>
            <p className="text-lg leading-8 text-gray-800">
              Indizen Pharma never negotiates the quality of its products. Right
              from investing in technology to delivering our products, we have
              high standards and strict quality control. We have 2000+ superior
              quality pharma products that are tested by healthcare
              professionals at each level to maintain customers’ safety. Our
              “Quality-by-design” approach ensures consistency and excellence in
              our process that brings better outcomes; this makes us pride in
              offering a top level of quality. All our medicines are deeply
              researched, manufactured, and distributed with the highest
              standards of care.
            </p>
          </div>
          <div className="justify-self-end" data-aos="fade-left" data-aos-delay="120">
            <img
              src={IMG_QUALITY_POLICY}
              alt="Quality tablets"
              className="w-full max-w-3xl rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl bg-blue-50/70 px-6 py-12 md:px-10"
        style={{
          backgroundImage: `url(${IMG_QAQC_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
        }}
        data-aos="slide-up"
      >
        <h2 className="mb-8 text-center text-4xl font-extrabold">
          Quality Assurance (QA) & Quality Control (QC)
        </h2>
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-8 text-gray-900">
          <p className="flex items-start gap-4">
            <span className="mt-1 text-sky-700">👍</span>
            To maintain the highest quality of our products, our raw material
            testing procedures are continuously reviewed and refined by us in
            order to be ahead of industry standards.
          </p>
          <p className="flex items-start gap-4">
            <span className="mt-1 text-sky-700">👍</span>
            We perform a series of thorough tests in our advanced laboratories
            to ensure that every batch of our products meets our highest-quality
            standards.
          </p>
          <p className="flex items-start gap-4">
            <span className="mt-1 text-sky-700">👍</span>
            Our professional team keeps themselves updated about the latest
            quality control techniques as well as industry standards through
            regular training that enhances their skills.
          </p>
          <p className="flex items-start gap-4">
            <span className="mt-1 text-sky-700">👍</span>
            Moreover, we maintain careful documentation that would enable us to
            trace all activities while maintaining responsibility at every stage
            from manufacturing to testing.
          </p>
          <p className="flex items-start gap-4">
            <span className="mt-1 text-sky-700">👍</span>
            Furthermore, we keep detailed records of our activity, which allow
            us to trace every step of the process and maintain accountability at
            every phase – from manufacturing to testing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl gap-8 px-4 py-12 md:grid md:grid-cols-[420px,1fr] md:items-start">
        <div data-aos="fade-right">
          <img
            src={IMG_RND}
            alt="R&D lab"
            className="w-full rounded-[24px] shadow"
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <h2 className="mb-4 text-4xl font-extrabold">Research & Development</h2>
          <p className="text-lg leading-8 text-gray-700">
            Continuous improvement in the manufacturing process is key to our
            research and development as we invest in the latest technology to
            increase production with more efficiency. Our well-organized R&amp;D
            department is equipped with the latest Infrastructure, skilled
            experts and innovative methods; this helps us develop various
            quality product ranges. At our enterprise, we are constantly working
            on improving innovation and technology to meet top industry
            standards. In addition to that, our research and development
            activities target the three main objectives, process technology
            improvement, quality superiority, and cost reduction. We employ a
            comprehensive approach since it can increase our engineering
            capabilities and stimulate more sustainable growth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14" data-aos="fade-up">
        <h3 className="mb-6 text-3xl font-extrabold">
          Our dedicated infrastructure has sophisticated, world-class facilities
          that deliver a one-stop solution in multi-vertical segments, like:
        </h3>
        <ul className="space-y-6 text-lg">
          <li className="flex items-center gap-4">
            <span className="text-sky-600">»»</span> Pharmaceuticals
          </li>
          <li className="flex items-center gap-4">
            <span className="text-sky-600">»»</span> Ayurveda and Herbal
          </li>
          <li className="flex items-center gap-4">
            <span className="text-sky-600">»»</span> Food Products Supplements
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-10">
        <h2 className="mb-8 text-center text-4xl font-extrabold" data-aos="fade-up">
          What we do?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            data-aos="flip-left"
          >
            <h3 className="mb-3 text-2xl font-semibold">Drug Discovery</h3>
            <p className="text-gray-600">
              Continuous exploration of novel compounds and formulations.
            </p>
          </div>
          <div
            className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            data-aos="flip-up"
            data-aos-delay="80"
          >
            <h3 className="mb-3 text-2xl font-semibold">Clinical Trials</h3>
            <p className="text-gray-600">
              Rigorous testing to ensure safety and efficacy.
            </p>
          </div>
          <div
            className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm"
            data-aos="flip-right"
            data-aos-delay="160"
          >
            <h3 className="mb-3 text-2xl font-semibold">Regulatory Approval</h3>
            <p className="text-gray-600">
              Adherence to global standards for product clearance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
