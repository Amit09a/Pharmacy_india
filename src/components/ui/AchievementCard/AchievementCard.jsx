import React from 'react';

const AchievementCard = ({ image, title}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AchievementCard;
