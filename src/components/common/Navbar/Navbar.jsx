import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      {/* Top strip */}
      <div className="bg-white text-sm text-gray-700 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2">
        <div className="text-lg text-center font-semibold flex-1">
          <span>WELCOME TO INDIZEN PHARMACEUTICAL</span>
        </div>

        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <span className="hidden md:inline">Contact with us :</span>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600 text-sm" />
            {[FaEnvelope, FaFacebookF, FaTwitter, FaInstagram].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:scale-90 cursor-pointer transition-transform"
                >
                  <Icon className="text-blue-600 text-sm" />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <hr className="border-t w-11/12 mx-auto" />

      {/* Main nav */}
      <nav className="px-4 md:px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/logos/ip_.png" alt="Logo" className="h-10 mr-6" />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`flex flex-col md:flex-row gap-6 text-md absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5 md:opacity-100 md:visible md:translate-y-0"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              About Us
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/products"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              Our Products
            </Link>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg border border-gray-200 rounded p-4 w-[600px] z-50">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 21 }, (_, i) => (
                  <Link
                    key={i}
                    to={`/products/product-${i + 1}`}
                    className="block px-2 py-1 text-sm text-gray-700 hover:bg-blue-100 rounded transition-transform hover:-translate-y-1"
                  >
                    Product {i + 1}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/blogs"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/manufacturing"
              className="block px-4 md:px-0 py-2 md:py-0 hover:text-blue-500 transition-transform hover:-translate-y-1"
            >
              Manufacturing Excellence
            </Link>
          </li>
        </ul>

        {/* Search */}
        <div className="hidden md:flex bg-zinc-300 items-center border border-gray-300 rounded px-2 py-2 ml-4">
          <input
            type="text"
            placeholder="Type to start searching..."
            className="outline-none text-sm bg-zinc-300"
          />
          <FaSearch className="ml-2 text-gray-500" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
