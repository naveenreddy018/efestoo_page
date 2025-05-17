import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5e/IIT_Hyderabad_Logo.svg"
              alt="IIT Hyderabad Logo"
              className="h-14"
            />
            <div>
              <h1 className="text-2xl font-semibold">Indian Institute of Technology</h1>
              <p className="text-sm text-gray-500">Hyderabad</p>
            </div>
          </div>
          <div className="flex space-x-3 text-gray-600 text-lg">
            <a href="#"><FiExternalLink /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
        <nav className="bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto flex space-x-6 p-3 text-sm font-medium text-gray-700">
            <a href="#">About</a>
            <a href="#">Our Library</a>
            <a href="#">Reviews & Ratings</a>
            <a href="#">Contact Us</a>
          </div>
        </nav>
      </div>

      {/* About Section */}
      <motion.div
        className="max-w-4xl mx-auto my-10 p-6 rounded-xl shadow-lg bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold text-blue-700 mb-4">About</h2>
        <p className="text-gray-700">
          📍 <strong>Hyderabad</strong> <br />
          My Music My Country proudly presents <strong>Anirudh Ravichander</strong>, the musical sensation behind
          chart-topping hits like <em>Vaathi Coming, Arabic Kuthu,</em> and the <em>Leo Anthem</em>, in a spectacular
          live concert organized by Hyderabad Talkies.
        </p>
        <p className="mt-2 text-gray-700">
          Get ready for an electrifying night as Anirudh, one of India's most celebrated music composers and singers,
          takes the stage for an unforgettable performance! Known for his high-energy beats and soul-stirring melodies,
          this concert promises an experience like never before.
        </p>
      </motion.div>

      {/* Events Section */}
      <div className="max-w-4xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Events you may like</h2>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search here"
            className="w-full border rounded-lg px-4 py-2 mr-4"
          />
          <div className="flex space-x-2">
            <button className="bg-black text-white px-4 py-2 rounded-lg">Paid</button>
            <button className="bg-gray-200 text-black px-4 py-2 rounded-lg">Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
