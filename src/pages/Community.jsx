import React from "react";
import { motion } from "framer-motion";

export default function Community({ darkMode }) {
  return (
    <section
      className={`min-h-screen py-20 px-6 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Global Community
        </motion.h1>
        <p className="text-xl max-w-3xl mx-auto">
          Join researchers and enthusiasts from around the world in quantum
          exploration.
        </p>
      </div>
    </section>
  );
}
