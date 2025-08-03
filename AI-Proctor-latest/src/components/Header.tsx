import React from 'react';
import { GlobeIcon, PhoneIcon, MessageSquareIcon, ChevronDownIcon, BookOpenIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 shadow-lg border-b-4 border-amber-400">
      <div className="container mx-auto px-4">
        {/* Top header */}
        <div className="flex items-center justify-between py-2 border-b border-amber-200/20 text-sm">
          <div className="flex items-center gap-1 text-amber-200">
            <GlobeIcon className="h-4 w-4" />
            <span>EN</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors duration-200">
              <span>Support</span>
            </button>
            <a href="tel:+18447558378" className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors duration-200">
              <PhoneIcon className="h-4 w-4" />
              <span>+1 (844) 755 8378</span>
            </a>
            <button className="flex items-center gap-1 text-amber-200 hover:text-white transition-colors duration-200">
              <MessageSquareIcon className="h-4 w-4" />
              <span>Live chat</span>
            </button>
          </div>
        </div>
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="h-12 flex items-center">
              <div className="bg-white p-2 rounded-full shadow-md">
                <BookOpenIcon className="h-7 w-7 text-indigo-700" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">AI Proctor</span>
            </Link>
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-1 cursor-pointer text-amber-200 hover:text-white transition-colors duration-200">
                <span>Features</span>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-amber-200 hover:text-white transition-colors duration-200">
                <span>Pricing</span>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-amber-200 hover:text-white transition-colors duration-200">
                <span>About</span>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
              <div className="text-lg font-semibold text-white ml-4">
                Advanced AI Exam Monitoring
              </div>
            </div>
          </div>
          <button 
            onClick={() => navigate('/signin')} 
            className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-6 py-3 rounded-md font-medium shadow-md transition-all duration-200 transform hover:scale-105"
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
}