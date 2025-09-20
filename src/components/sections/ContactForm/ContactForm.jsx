import React, { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submit logic here
    alert("Form submitted!");
  };

  return (
    <section className="relative bg-cover bg-center max-w-6xl mx-auto backdrop-blur-md p-8 ">
      <div className="mb-20"
      style={{
              backgroundImage:
                "url('https://www.indizenpharma.com/wp-content/uploads/2024/07/Artboard-12.png')",
              backgroundSize: 75,
              backgroundRepeat: "no-repeat",
              opacity:"initial"
            }}
      
      >
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800 mt-5">Get in Touch</h2>
        </div>
        <div className="bg-zinc-500 w-3/12 ">
        <hr className="mt-15 "/>
        </div>
        <h3 className="mt-1 pt-4\3 text-3xl font-semibold text-gray-800 pb-9">
          Our team will get back <span className="italic font-semibold">to you</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: Image Section */}
        <div className="mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg h-full w-full flex">
            <img
              src="https://www.indizenpharma.com/wp-content/uploads/2024/08/Get-in-Touch-02.webp"
              alt="Pharma"
              className="w-full h-full border-white"
            />
          </div>
        </div>

        {/* Right: Form Section */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
        >
          <input
            className="bg-gray-100 py-4 px-6 rounded placeholder-gray-400 col-span-1"
            placeholder="Enter Your First Name"
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="bg-gray-100 py-4 px-6 rounded placeholder-gray-400 col-span-1"
            placeholder="Enter Your Last Name"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            className="bg-gray-100 py-4 px-6 rounded placeholder-gray-400 col-span-2"
            placeholder="Enter Your Number Here"
            type="tel"
            name="number"
            value={form.number}
            onChange={handleChange}
            required
          />
          <input
            className="bg-gray-100 py-4 px-6 rounded placeholder-gray-400 col-span-2"
            placeholder="Enter your Email Here"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="bg-gray-100 py-4 px-6 rounded placeholder-gray-400 col-span-2"
            rows={4}
            placeholder="Write your Enquiry here"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="col-span-2 border border-blue-400 text-blue-600 rounded py-4 font-semibold hover:bg-blue-50 transition"
          >
            SUBMIT YOUR ENQUIRY
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
