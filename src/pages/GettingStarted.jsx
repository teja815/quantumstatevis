import React from "react";
import { motion } from "framer-motion";

export default function GettingStarted({ darkMode }) {
  return (
    <section
      className={`min-h-screen py-20 px-20 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Getting Started
        </motion.h1>
        <p className="text-lg leading-relaxed">
          Begin with a multi-qubit circuit, choose from 2ⁿ possibilities, add
          gates, and visualize the circuit. Then run the full mathematical
          procedure to observe results.
        </p>
      </div>
    </section>
  );
}
