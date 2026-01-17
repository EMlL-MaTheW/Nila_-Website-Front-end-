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
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#247336] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg 
                className="w-5 h-5 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#247336] to-emerald-600 bg-clip-text text-transparent">
              Nila
            </span>
          </div>

          {/* Desktop Navigation */}
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

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-[#247336] to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/services", label: "Services" },
//     { path: "/consultants", label: "Consultants" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="bg-white/95 backdrop-blur shadow-sm border-b border-gray-100 sticky top-0 z-50 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           <Link to="/" className="flex items-center space-x-2 group">
//             <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
//               <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
//               Nila
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
//                   location.pathname === item.path
//                     ? "bg-green-50 text-green-600 shadow-sm"
//                     : "text-gray-600 hover:text-green-600 hover:bg-green-50"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <Link
//             to="/book"
//             className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transform hover:-translate-y-0.5 transition-all duration-200"
//           >
//             Get Started
//           </Link>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-green-600 transition-colors"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
//           <div className="px-4 pt-4 pb-6 space-y-3">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
//                   location.pathname === item.path
//                     ? "bg-green-50 text-green-600 border border-green-200"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-600"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <Link
//               to="/book"
//               onClick={() => setIsOpen(false)}
//               className="block w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl text-center shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
