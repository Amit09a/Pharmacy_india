import React from "react";

const Footer = () => (
  <footer className="bg-white pt-0 border-t">
    {/* Google Map Embed */}
    <div className="w-full h-60">
      <iframe
        title="Indizen Location"
        src="https://www.google.com/maps?q=INDIZEN+PHARMACEUTICAL+LEADING+PHARMA+COMPANY,+Zirakpur,+Punjab,+India&hl=en&z=17&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>

    {/* Social Icons Row */}
    <div className="flex justify-center gap-3 py-6">
      <a
        href="https://www.facebook.com/indizenpharmacompany"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-100 p-2 rounded"
      >
        <img src="/assets/icons/facebook.svg" alt="fb" className="w-7 h-7" />
      </a>
      <a
        href="https://www.instagram.com/indizen_pharma"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-100 p-2 rounded"
      >
        <img src="/assets/icons/instagram.svg" alt="insta" className="w-7 h-7" />
      </a>
      <a
        href="https://x.com/indizenpharma30"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-100 p-2 rounded"
      >
        <img src="/assets/icons/twitter.svg" alt="x" className="w-7 h-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/indizen-pharma-028477381/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-100 p-2 rounded"
      >
        <img src="/assets/icons/linkedin.svg" alt="in" className="w-7 h-7" />
      </a>
    </div>

    {/* Main Content */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-10 border-t">
      {/* Company/About */}
      <div>
        <img src="/assets/logos/ip_.png" alt="Indizen" className="h-20 mb-4" />
        <p className="text-gray-700">
          Indizen Pharma is a leading pharmaceutical company, distributor, and
          manufacturer in India. Company deals in various healthcare therapeutic
          segments and offers the most lucrative PCD pharma franchise
          opportunities.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-lg mb-3 border-b pb-1">Quick Links</h3>
        <ul className="space-y-2 text-gray-800">
          <li>
            <a href="/" className="hover:text-blue-600 flex items-center gap-2">
              <span>🏠</span>Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <span>ℹ️</span>About us
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <span>📦</span>Products
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <span>📝</span>Blogs
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <span>📞</span>Contact us
            </a>
          </li>
          <li>
            <a
              href="/sitemap"
              className="hover:text-blue-600 flex items-center gap-2"
            >
              <span>🗺️</span>Sitemap
            </a>
          </li>
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold text-lg mb-3 border-b pb-1">
          Product Categories
        </h3>
        <ul className="space-y-2 text-gray-800">
          <li>Anti Diabetes</li>
          <li>Anti-Infective</li>
          <li>Antiinflammatory & Analgesics</li>
          <li>Ayurvedic & Herbal</li>
          <li>Cardiovascular</li>
          <li>Urology Products</li>
        </ul>
        <button className="w-[200px] mt-5 py-2 rounded bg-gradient-to-b from-orange-400 to-orange-600 text-white font-semibold hover:bg-orange-500">
          CHECK ALL PRODUCTS
        </button>
      </div>

      {/* Contact/Address */}
      <div>
        <h3 className="font-semibold text-lg mb-3 border-b pb-1">We are here !</h3>
        <div className="mb-2 text-gray-700">
          <span>🏢</span>Indizen Pharmaceutical
        </div>
        <p className="text-sm mb-2">
          SCF 1, Neel Kanth Plaza, Dhakoli Zirakpur-140603, India
        </p>
        <p className="text-sm mb-4">
          Plot No 426, Industrial Area, Phase 2 HSIIDC Barwala, Panchkula,
          134113
        </p>
        <div className="flex flex-col gap-1 mb-1">
          <span className="flex gap-2">
            <span>📞</span> (+91) 6280664669, 9467748770, 7206476839
          </span>
          <span className="flex gap-2">
            <span>📧</span> indizenpharma@gmail.com
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
