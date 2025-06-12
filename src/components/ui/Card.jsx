import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-red-50 to-pink-50 border-red-100' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;