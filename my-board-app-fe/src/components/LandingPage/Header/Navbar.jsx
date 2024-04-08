import React from 'react';
import MyBoardLogo from '/Users/mac/Desktop/myboard_fe/my-board-app-fe/src/assets/images/my-board-logo.png';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white py-3 px-14 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="mr-2">
            <img src={MyBoardLogo} alt="My Board Logo" className="w-9 h-8" />
          </a>
          <a href="/" className="font-semibold text-xl text-black">
            My Board
          </a>
        </div>
        <ul className="flex items-center">
          <li className="mx-4">
            <a href="/" className="text-md text-black hover:text-blue-700">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="/" className="text-md text-black hover:text-blue-700">
              About Us
            </a>
          </li>
          <li className="mx-4">
            <a href="/" className="text-md text-black hover:text-blue-700">
              Services
            </a>
          </li>
          <a href="/" className="mr-4 px-6 py-2 border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white rounded-md transition-colors">
            Log In
          </a>
          <a href="/" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-md transition-colors">
            Sign Up
          </a>
        </ul>
      </div>
    </nav>
  );
};
