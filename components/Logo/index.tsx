import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  withText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { logo: 'w-8 h-8', text: 'text-xl' },
  md: { logo: 'w-10 h-10', text: 'text-2xl' },
  lg: { logo: 'w-12 h-12', text: 'text-3xl' },
};

const Logo = ({ className = '', withText = true, size = 'md' }: LogoProps) => {
  const sizeClasses = sizes[size];
  
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses.logo} bg-cyan-600 rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold">E</span>
      </div>
      {withText && (
        <span className={`${sizeClasses.text} font-bold text-gray-900`}>
          Eteris
        </span>
      )}
    </Link>
  );
};

export default Logo;
