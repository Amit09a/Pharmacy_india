import React, { useState } from "react";
import BlogCard from "../components/ui/BlogCard";

const defaultBlogPost = {
  title: "Caring for Little Smiles, Stronger Tomorrows – Pediatric Products",
  excerpt: "At Indizen Pharma, we believe every child deserves the healthiest start in life. Childhood is a phase of rapid growth, development, and learning, and during",
  image: "https://www.indizenpharma.com/wp-content/uploads/2025/06/Tips-to-Start-a-Successful-PCD-Pharma-Franchise-Company-in-India.jpg",
  readMoreLink: "/blogs/pediatric-products",
};

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Generate 12 identical blog posts with unique ids
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
      {/* Header / Banner */}
      <section className="relative h-60 flex items-center bg-gradient-to-r from-blue-100 to-blue-200 mb-10 mt-20 pt-10">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/assets/images/Contact-us.webp"
          alt="Blog Banner"
        />
        <div className="z-10 relative px-10 max-w-7xl mx-auto w-full flex flex-col justify-center h-full">
          <nav className="mb-2 text-gray-700">
            <a href="/" className="underline text-blue-700 font-medium">
              Home
            </a>{" "}
            / Blogs
          </nav>
          <h1 className="text-4xl font-bold text-blue-900">Blogs</h1>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              readMoreLink={blog.readMoreLink}
              onClick={() => window.location.href = blog.readMoreLink}
              showFullExcerpt={false}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`w-9 h-9 rounded-full border border-blue-600 font-semibold ${
                currentPage === idx + 1 ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-blue-100"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
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
