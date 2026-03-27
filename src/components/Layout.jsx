import React from 'react';
import { HeartPulse } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-teal-500 p-2 rounded-lg text-white">
              <HeartPulse size={28} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-teal-700">Arogya<span className="text-blue-600">Seva</span></span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">About Us</a>
            <a href="#volunteer" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">Volunteer</a>
          </nav>
          <div className="md:hidden flex items-center">
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Arogya Seva NGO. Empowering rural healthcare.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
