import React from 'react';

const BlogCard = ({ 
  image, 
  category, 
  title, 
  excerpt, 
  onClick,
  showFullExcerpt = false 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>
        
        <p className={`text-gray-600 text-sm leading-relaxed mb-4 ${!showFullExcerpt ? 'line-clamp-3' : ''}`}>
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <button 
          onClick={onClick}
          className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors"
        >
          READ MORE »
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
