import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="#1E40AF" strokeWidth="2"/>
        
        {/* Shopping Bag Icon */}
        <path
          d="M12 16C12 13.7909 13.7909 12 16 12H24C26.2091 12 28 13.7909 28 16V28C28 30.2091 26.2091 32 24 32H16C13.7909 32 12 30.2091 12 28V16Z"
          fill="white"
        />
        
        {/* Bag Handle */}
        <path
          d="M16 12C16 10.8954 16.8954 10 18 10H22C23.1046 10 24 10.8954 24 12V14H16V12Z"
          fill="white"
        />
        
        {/* Shopping Cart Lines */}
        <path
          d="M15 20H25M15 24H23M15 28H21"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Node.js Symbol */}
        <circle cx="30" cy="10" r="4" fill="#68D391"/>
        <path
          d="M30 6C31.1046 6 32 6.89543 32 8C32 9.10457 31.1046 10 30 10C28.8954 10 28 9.10457 28 8C28 6.89543 28.8954 6 30 6Z"
          fill="white"
        />
      </svg>
    </div>
  );
}; 