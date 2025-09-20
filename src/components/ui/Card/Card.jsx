import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Card = ({ number, title, description, image }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { x: 200, opacity: 0 }, // start position (right se aayega)
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-16 h-16 mx-auto mb-4 object-contain"
        />
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
        {number}
      </h2>
      <h3 className="text-lg font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
