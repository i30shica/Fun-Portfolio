import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GIPHY = [
  "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  "https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif",
  "https://media.giphy.com/media/l0HUpt2s9Pclgt9Vm/giphy.gif",
];

const FunPortfolio = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center p-4">
      
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My  Portfolio 🎉<br/>
        Ishica Binod Kumar here!
      </motion.h1>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => alert("Projects Coming Soon 🚀")}
          className="px-6 py-3 bg-white text-purple-700 rounded-xl shadow-lg font-bold"
        >
          Projects
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg font-bold"
        >
          Contact Me
        </motion.button>
      </div>

      {/* Popup with GIFs */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-2xl p-10 w-11/12 md:w-1/2 shadow-2xl relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1, opacity:1 }}
              exit={{ scale: 0 }}
            >
              <h2 className="text-4xl font-bold mb-4">🙏 Please Hire Me!</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {GIPHY.map((gif, index) => (
                  <motion.img
                    key={index}
                    src={gif}
                    alt="fun gif"
                    className="w-32 h-32 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded-full"
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FunPortfolio;
