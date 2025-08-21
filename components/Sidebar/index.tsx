import React from 'react';
import Link from 'next/link';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sidebar">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/pages" 
            className="card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Pages</h2>
            <p className="text-gray-600">Explore our collection of pages with detailed information about our services and events.</p>
          </Link>
          
          <Link 
            href="/galeria" 
            className="card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Gallery</h2>
            <p className="text-gray-600">View our photo gallery showcasing past events and memorable moments.</p>
          </Link>
          
          <Link 
            href="/about" 
            className="card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">About Us</h2>
            <p className="text-gray-600">Learn more about our team, mission, and what makes us unique.</p>
          </Link>
          
          <Link 
            href="/contact" 
            className="card p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Contact</h2>
            <p className="text-gray-600">Get in touch with us for inquiries, bookings, or any questions.</p>
          </Link>
        </div>
        {children}
    </div>
  );
};

export default Sidebar;
