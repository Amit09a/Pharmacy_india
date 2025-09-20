import React from "react";
import BlogCard from "../../ui/BlogCard";

const BlogSection = ({ showAll = false, maxBlogs = 3 }) => {
  const blogs = [
    {
      id: 1,
      category: "Pediatric Products",
      title: "Caring for Little Smiles, Stronger Tomorrows – Pediatric Products",
      excerpt: "The pharmaceutical industry in India is increasing, and gynaecology medicines are one of the fastest growing medicines in the medical field. Women are more conscious about their health that's why they need quality",
      image: "https://www.indizenpharma.com/wp-content/uploads/2025/09/Caring-for-Little-Smiles-Stronger-Tomorrows-Pediatric-Products.png",
    },
    {
      id: 2,
      category: "GYNAE PCD PHARMA FRANCHISE", 
      title: "How to Start a Gynae PCD Pharma Franchise in India?",
      excerpt: "Medicines are needed in healthcare sector. Critical care medicines are mostly used in emergencies or serious illness and associated specific care in the healthcare institutions. So being smart and pick Critical Care Pharma",
      image: "https://www.indizenpharma.com/wp-content/uploads/2025/08/indizenpharma-1.jpg",
      
    },
    {
      id: 3,
      category: "Critical Care Pharma Franchise Company",
      title: "Benefits of Partnering with Critical Care Pharma Franchise Company",
      excerpt: "The Indian pharmaceutical market is booming, and one of the most promising models is the PCD pharma franchise distributors. The PCD model has attracted entrepreneurs, small-scale companies, and even healthcare professionals due to",
      image: "https://www.indizenpharma.com/wp-content/uploads/2025/08/Benefits-of-Partnering-with-Critical-Care-Pharma-Franchise-Company.jpg", 
      
    },
    {
      id: 4,
      category: "PHARMA FRANCHISE TIPS",
      title: "Top 10 Tips for Successful Pharma Franchise Business",
      excerpt: "Starting a pharma franchise business can be highly rewarding if done correctly. Here are the top 10 tips to help you build a successful pharmaceutical franchise business in India.",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/pharma-tips.webp",
      
    },
    {
      id: 5,
      category: "PHARMACEUTICAL INDUSTRY",
      title: "Future of Pharmaceutical Industry in India 2025",
      excerpt: "The pharmaceutical industry in India is expected to reach new heights in 2025. With government support and increasing healthcare awareness, the industry is set for massive growth.",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/pharma-future.webp",
      
    },
    {
      id: 6,
      category: "MEDICINE QUALITY",
      title: "Importance of Quality Control in Pharmaceutical Manufacturing",
      excerpt: "Quality control is the backbone of pharmaceutical manufacturing. Learn about the importance of maintaining high standards in drug production and how it affects patient safety.",
      image: "https://www.indizenpharma.com/wp-content/uploads/2024/07/quality-control.webp",
      
    }
  ];

  const displayBlogs = showAll ? blogs : blogs.slice(0, maxBlogs);

  return (
    <section className="relative bg-cover bg-center max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          {/* Icon with Latest Blogs */}
          <div className="flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Latest Blogs
            </h2>
          </div>
          
          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl text-gray-600 border-b-2 border-gray-300 pb-2 inline-block">
            All recent updates <span className="italic">finds here</span>
          </h3>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              excerpt={blog.excerpt}
              readMoreLink={blog.readMoreLink}
              onClick={() => {
                // Handle blog click - navigate to blog detail
                console.log(`Navigate to ${blog.readMoreLink}`);
                // You can use React Router here: navigate(blog.readMoreLink);
              }}
            />
          ))}
        </div>

        {/* Show More Button (if not showing all blogs) */}
        {!showAll && blogs.length > maxBlogs && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              VIEW ALL BLOGS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
