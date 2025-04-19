import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100 py-4 px-8 flex justify-between items-center ">
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </nav>

      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-yellow-400">Cafe Bliss</Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-gray-100 placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
    </header>
  );
};

export default Header;