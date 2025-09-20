import React from "react";
import Card from "../components/ui/Card"; // Your card component
import Form from "../components/form/form";

// Add images for the cards (replace with your actual URLs)
const contactCards = [
  {
    image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/placeholder.webp",
    title: "Corporate office 1",
    description: (
      <>
        Indizen Pharmaceutical
        <br />
        SCF 1, Neel Kanth Plaza,
        Dhakoli , Zirakpur-140603, India
      </>
    ),
  },
  {
    image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/placeholder.webp",
    title: "Corporate office 2",
    description: (
      <>
        Plot No 426, Industrial Area, Phase 2<br />
        HSIIDC Barwala, Panchkula, 134113
      </>
    ),
  },
  {
    image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/complain.webp",
    title: "Phone Number",
    description: (
      <a href="tel:9467748770" className="underline text-gray-600">
        (+91) 9467748770, 7206476839
      </a>
    ),
  },
  {
    image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/mail.webp",
    title: "Email",
    description: (
      <a
        href="mailto:indizenpharma@gmail.com"
        className="underline text-gray-600"
      >
        indizenpharma@gmail.com
      </a>
    ),
  },
];

const ContactUsPage = () => (
  <div className="bg-blue-50 h-[1200px]">
    {/* Banner */}
    <section className="relative h-56 flex items-center mt-10"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-60 mt-10 pt-10"
        src="/assets/images/Contact-Us-Breadcrumb-.webp"
        alt="Banner"
      />
      <div className="z-10 relative px-10 max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
        <nav className="mb-2 text-gray-700 text-lg">
          <a href="/" className="underline text-blue-700 font-medium">
            Home
          </a>{" "}
          / Contact us
        </nav>
      </div>
    </section>

    {/* Cards Section */}
    <section className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-10">
        {contactCards.map((card, idx) => (
          <Card
            key={card.title + idx}
            image={card.image}
            title={card.title}
            description={card.description}
            className="bg-white rounded-xl shadow-lg p-8 text-center border-b-4 border-blue-400"
          />
        ))}
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1 mb-100">
        <h2 className="text-xl font-semibold mt-1">Get in Touch</h2>
        <div className="border-t border-gray-300 mb-4"></div>
        <h3 className="text-3xl font-bold mb-6 leading-tight">
          For expert PCD pharma franchise solutions tailored to your healthcare
          needs, contact us today. We&apos;re here to partner with you for
          success.
        </h3>
        <img
          src="https://www.indizenpharma.com/wp-content/uploads/2024/07/Get-in-Touch-2.webp"
          className="rounded-xl"
          alt="Get in Touch"
        />
      </div>
      <div className="flex-1 w-full mb-50">
        <Form />
      </div>
    </section>
  </div>
);

export default ContactUsPage;
