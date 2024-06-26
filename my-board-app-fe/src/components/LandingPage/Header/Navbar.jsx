import React from 'react';
import MyBoardLogo from '../../../assets/images/my-board-logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white w-full m-[0_0.3rem_6.6rem_0] p-[0.9rem_4.4rem_0.9rem_4.6rem]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-2">
            <img src={MyBoardLogo} alt="My Board Logo" className="w-9 h-8" />
          </Link>
          <Link to="/" className="font-product-sans font-normal text-xl text-black">
            My Board
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="mx-4">
            <Link to="/" className="text-md text-black hover:text-blue-700">
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/" className="text-md text-black hover:text-blue-700">
              About Us
            </Link>
          </li>
          <li className="mx-4">
            <Link to="/" className="text-md text-black hover:text-blue-700">
              Services
            </Link>
          </li>
          <Link to="/login" className="mr-4 px-6 py-2 border border-blue-700 text-blue-700 hover:bg-blue-600 hover:text-white rounded-md transition-colors">
            Log In
          </Link>
          <Link to="/signup" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-md transition-colors">
            Sign Up
          </Link>
        </ul>
      </div>
    </nav>
  );
};
