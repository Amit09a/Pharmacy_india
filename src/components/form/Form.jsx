import React, { useState } from "react";

const Form = () => {
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
    <section className="max-w-6xl mx-auto p-8">

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
      >
        <input
          className="bg-gray-200 py-4 px-6 rounded placeholder-gray-400 col-span-1"
          placeholder="Enter Your First Name"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-200 py-4 px-6 rounded placeholder-gray-400 col-span-1"
          placeholder="Enter Your Last Name"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-200 py-4 px-6 rounded placeholder-gray-400 col-span-2"
          placeholder="Enter Your Number Here"
          type="tel"
          name="number"
          value={form.number}
          onChange={handleChange}
          required
        />
        <input
          className="bg-gray-200 py-4 px-6 rounded placeholder-gray-400 col-span-2"
          placeholder="Enter your Email Here"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-gray-200 py-4 px-6 rounded placeholder-gray-400 col-span-2"
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
    </section>
  );
};

export default Form;
