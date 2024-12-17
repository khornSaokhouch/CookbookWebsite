import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full border-b px-4 md:px-20">
      {/* Top Navigation */}
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo.png" // Replace with your actual logo URL
            alt="CookBook Logo"
            className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] object-contain rounded"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10 text-gray-800 text-lg">
          <a href="#" className="hover:text-blue-500">
            HOME
          </a>
          <a href="#" className="hover:text-blue-500">
            ARTICLE
          </a>
          <a href="#" className="hover:text-blue-500">
            ABOUT US
          </a>
        </nav>

        {/* Search Box */}
        <div className="flex items-center relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full border rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m1.65-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Add a Recipe & Login Buttons */}
        <div className="flex items-center space-x-10 ml-4 ">
          <button className="hover:text-blue-500 whitespace-nowrap text-lg">
            + ADD A RECIPE
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            <a href="/login">LOGIN</a>
          </button>
        </div>
      </div>

 
      
      {/* Bottom Navigation */}
      <div className="flex justify-start space-x-10 py-2 px-20 text-sm md:text-base ">
        
        <a href="#" className="hover:text-blue-500">
          Recipe
        </a>
        <a href="#" className="hover:text-blue-500">
          Popular
        </a>
        <a href="#" className="hover:text-blue-500">
          Drinks
        </a>
        <a href="#" className="hover:text-blue-500">
          Dessert
        </a>
        <a href="#" className="hover:text-blue-500">
          Occasions
        </a>
      </div>
    </header>
  );
};

export default Header;
