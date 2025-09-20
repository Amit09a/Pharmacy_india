// components/ui/FloatingButtons.jsx
import React from "react";

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 top-1/3 z-50 flex flex-col items-center gap-4">
      {/* Call button */}
      <a href="tel:+910000000000" className="block">
        <img
          src="/assets/images/phone.png" // Replace with your phone icon URL
          alt="Call"
          className="h-14 w-14 "
        />
      </a>

      {/* WhatsApp button */}
      <a href="https://wa.me/910000000000" className="block">
        <img
          src="/assets/images/whstapp.png" // Replace with your WhatsApp icon URL
          alt="WhatsApp"
          className="h-14 w-14  "
        />
      </a>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="rounded-lg bg-sky-600 p-2 text-white shadow-md hover:bg-sky-700"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default FloatingButtons;
