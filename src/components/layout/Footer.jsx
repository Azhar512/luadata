import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-red-500 mb-4">Luadata</div>
          <p className="text-gray-400 mb-6">
            Custom AI & ML Solutions | NDA Protected | Based in Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">NDA Agreement</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2025 Luadata. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;