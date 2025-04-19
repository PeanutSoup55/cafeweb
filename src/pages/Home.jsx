import React from 'react';
import Header from '../components/header.jsx';
import bgImage from '../assets/bg.jpg'; // Import the image properly

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-100">
      
      <Header />

      <div className="relative flex-grow flex flex-col items-center justify-center px-4 sm:px-8">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            opacity: 0.3, 
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-center">
            Welcome to Cafe Bliss
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-center text-gray-300">
            Your cozy spot for coffee, pastries, and more.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg text-lg hover:bg-yellow-600 transition">
            Explore Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;