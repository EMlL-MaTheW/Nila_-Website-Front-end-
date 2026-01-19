import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50 shadow-sm transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#247336] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              {/* <svg 
                className="w-5 h-5 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg> */}
              <i className="fa-solid fa-leaf text-white text-xl"></i>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#247336] to-emerald-600 bg-clip-text text-transparent">
              Nila
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              Services
            </a>
            <a href="#counselors" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              Counselors
            </a>
            <a href="#resources" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              Resources
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#247336] transition-colors font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>

          <button className="bg-gradient-to-r from-[#247336] to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

