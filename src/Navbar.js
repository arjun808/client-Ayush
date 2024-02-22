import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png"
            alt="Logo"
            className="h-8 w-8 mr-8"
          />
          <span className="text-white font-bold text-lg">Company Name</span>
        </div>

        <ul className="flex items-center space-x-4">
          <li>
            <a href="/signup" className="text-white hover:text-gray-300">
              Sign Up
            </a>
          </li>
          <li>
            <a href="/signin" className="text-white hover:text-gray-300">
              Sign In
            </a>
          </li>
          <li>
            <button className="text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 2.293a1 1 0 011.414 0L10 7.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Add to Cart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
