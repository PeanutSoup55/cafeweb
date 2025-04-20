import React from 'react';
import { useState } from 'react';
import Header from '../components/header.jsx';
import bgImage from '../assets/bg.jpg';
import { motion } from 'framer-motion';

import img1 from "../assets/im1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const Home = () => {
  const [showDrinks, setShowDrinks] = useState(false);
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showBakedGoods, setShowBakedGoods] = useState(false);
  const [showSweets, setShowSweets] = useState(false);


  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const drinks = [
    { title: "Espresso", description: "Rich and bold espresso shot.", price: "$3.50", image: img1 },
    { title: "Cappuccino", description: "Espresso with steamed milk and foam.", price: "$4.00", image: img2 },
    { title: "Latte", description: "Espresso with steamed milk.", price: "$4.50", image: img4 },
    { title: "Iced Coffee", description: "Chilled coffee served over ice.", price: "$3.75", image: img2 },
    { title: "Mocha", description: "Espresso with chocolate and steamed milk.", price: "$4.75", image: img3 },
    { title: "Green Tea", description: "Refreshing and healthy green tea.", price: "$2.50", image: img1 },
    { title: "Hot Chocolate", description: "Rich and creamy hot cocoa.", price: "$3.50", image: img2 },
  ];

  const breakfast = [
    { title: "Bagel with Cream Cheese", description: "Toasted bagel with creamy spread.", price: "$3.25", image: img4 },
    { title: "Sandwich", description: "Freshly made with your choice of fillings.", price: "$5.50", image: img4 },
  ];

  const bakedGoods = [
    { title: "Croissant", description: "Flaky and buttery French pastry.", price: "$3.00", image: img1 },
    { title: "Blueberry Muffin", description: "Freshly baked with real blueberries.", price: "$2.75", image: img3 },
  ];

  const sweets = [
    { title: "Apple Pie", description: "Classic dessert with a flaky crust.", price: "$4.00", image: img3 },
  ];

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col text-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          height: "100vh", // Fix the height to the viewport
          backgroundAttachment: "fixed", // Keep the background fixed
        }}
      ></div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <motion.div
        className=" flex flex-col items-center justify-center px-4 sm:px-8 relative z-10"
        style={{
          height: "calc(100vh - 72px)", 
        }}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          Welcome to the Old Mill Cafe
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-center text-gray-300">
          Your cozy spot for coffee, pastries, and more.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg text-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToMenu}
        >
          Explore Our Menu
        </motion.button>
      </motion.div>

      {/* Menu Section */}
      <section id="menu" className="bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-screen-lg mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Menu
        </h2>

        {/* Drinks */}
        <div className="mb-12">
          <h3
            onClick={() => setShowDrinks(!showDrinks)}
            className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer"
          >
            Drinks
            <span className="ml-2 text-gray-600">
              {showDrinks ? "▲" : "▼"}
            </span>
          </h3>
          {showDrinks && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {drinks.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-gray-800 font-bold mt-4">{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Breakfast */}
        <div className="mb-12">
          <h3
            onClick={() => setShowBreakfast(!showBreakfast)}
            className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer"
          >
            Breakfast
            <span className="ml-2 text-gray-600">
              {showBreakfast ? "▲" : "▼"}
            </span>
          </h3>
          {showBreakfast && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {breakfast.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-gray-800 font-bold mt-4">{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Baked Goods</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bakedGoods.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-gray-800 font-bold mt-4">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sweets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Sweets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sweets.map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-gray-800 font-bold mt-4">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;