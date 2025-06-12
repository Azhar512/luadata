import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Stylized Luadata Logo */}
            <div className="relative">
              <h1 className="text-3xl font-black tracking-tight select-none">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Lua
                </span>
                <span className="text-gray-800 relative inline-block">
                  {/* Custom styled "d" characters with cuts */}
                  <span className="relative inline-block">
                    <span className="font-mono">d</span>
                    {/* Cut effect for first 'd' */}
                    <div className="absolute top-2 right-1 w-2 h-1 bg-white transform rotate-45"></div>
                    <div className="absolute top-3 right-0.5 w-1.5 h-0.5 bg-white transform -rotate-12"></div>
                  </span>
                  <span>ata</span>
                  {/* Cut effect underline */}
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
                  {/* Additional cut marks for style */}
                  <div className="absolute top-1 left-0 w-1 h-3 bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-60"></div>
                  <div className="absolute top-1 right-0 w-1 h-3 bg-gradient-to-b from-transparent via-red-200 to-transparent opacity-60"></div>
                </span>
              </h1>
              {/* Enhanced accent elements */}
              <div className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute -top-2 -left-1 w-1 h-1 bg-orange-400 rounded-full opacity-70"></div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Services</a>
            <a href="#case-studies" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Case Studies</a>
            <a href="#contact-form" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
          </nav>
          
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;