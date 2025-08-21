'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the Logo component with no SSR
const Logo = dynamic(() => import('../Logo'), { ssr: false });

// Dynamically import icons with no SSR
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope), { ssr: false });
const FaPhone = dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone), { ssr: false });
const FaMapMarkerAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt), { ssr: false });
const FaFacebook = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), { ssr: false });
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Creating unforgettable events and experiences that leave lasting impressions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#galeria" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaEnvelope className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email us at</p>
                  <a href="mailto:info@eterisevents.com" className="text-white hover:text-cyan-400 transition-colors">
                    info@eterisevents.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Call us</p>
                  <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-cyan-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Visit us</p>
                  <p>123 Event Street, City</p>
                  <p>Country</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Eteris Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
