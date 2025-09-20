import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogCard from "../components/ui/BlogCard";

const defaultBlogPost = {
  title: "Caring for Little Smiles, Stronger Tomorrows – Pediatric Products",
  excerpt:
    "At Indizen Pharma, we believe every child deserves the healthiest start in life. Childhood is a phase of rapid growth, development, and learning, and during",
  image:
    "https://www.indizenpharma.com/wp-content/uploads/2025/06/Tips-to-Start-a-Successful-PCD-Pharma-Franchise-Company-in-India.jpg",
  readMoreLink: "/blogs/pediatric-products",
};

const BlogsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      offset: 90,
      once: true,
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const blogPosts = Array.from({ length: blogsPerPage }, (_, idx) => ({
    ...defaultBlogPost,
    id: idx + 1,
  }));

  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const paginatedBlogs = blogPosts.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="bg-blue-50 min-h-screen">
      <section
        className="relative h-60 flex items-center bg-gradient-to-r from-blue-100 to-blue-200 mb-10 mt-20 pt-10 overflow-hidden"
        data-aos="fade-down"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/assets/images/Contact-us.webp"
          alt="Blog Banner"
        />
        <div className="z-10 relative px-6 md:px-10 max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
          <nav className="mb-2 text-gray-700" data-aos="zoom-in" data-aos-delay="150">
            <a href="/" className="underline text-blue-700 font-medium">
              Home
            </a>{" "}
            / Blogs
          </nav>
          <h1
            className="text-3xl md:text-4xl font-bold text-blue-900"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Blogs
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {paginatedBlogs.map((blog, i) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 60, 360)}
            >
              <BlogCard
                image={blog.image}
                title={blog.title}
                excerpt={blog.excerpt}
                readMoreLink={blog.readMoreLink}
                onClick={() => (window.location.href = blog.readMoreLink)}
                showFullExcerpt={false}
              />
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-12 flex-wrap gap-2"
          data-aos="zoom-in-up"
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-9 h-9 rounded-full border border-blue-600 font-semibold transition-colors duration-200 ${
                currentPage === idx + 1
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
              onClick={() => {
                setCurrentPage(idx + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label={`Page ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
