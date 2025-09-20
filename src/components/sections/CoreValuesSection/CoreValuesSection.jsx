import React, { useState } from "react";

const CoreValuesSection = () => {
  const [openModal, setOpenModal] = useState(null);

  const values = [
    { id: 1, title: "Integrity", content: "We act with honesty, transparency, and ethics in everything we do." },
    { id: 2, title: "Innovation", content: "We strive for continuous improvement and innovation in our products and processes." },
    { id: 3, title: "Quality", content: "We uphold the highest standards of safety, efficacy, and quality in all our offerings." },
    { id: 4, title: "Customer Care", content: "Our focus is on delivering exceptional service and building trust with our clients." },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/Our-Mission-vision-bg.webp')" }}
    >
      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center lg:text-left flex flex-col items-center lg:items-start gap-10">
        <h2 className="text-3xl font-semibold text-white z-10">Our Core Values</h2>
        <div className="border-t border-white w-12 mx-auto lg:mx-0 mb-6 z-10"></div>
        <p className="italic text-lg max-w-md mx-auto lg:mx-0 opacity-90 text-white z-10">
          We offer safety and efficacy for patients by ensuring that the highest quality is upheld in all our products.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 z-10">
          {values.map((value) => (
            <button
              key={value.id}
              onClick={() => setOpenModal(value.id)}
              className="bg-white text-gray-800 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
            >
              {value.title}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-lg mx-4 relative">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {values.find((v) => v.id === openModal).title}
            </h3>
            <p className="text-gray-700">
              {values.find((v) => v.id === openModal).content}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreValuesSection;
