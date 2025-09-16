import React from "react";
import { motion } from "framer-motion";

export default function QuantumComputing({ darkMode }) {
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
          Quantum Computing
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Understand quantum algorithms and their applications in modern
          computing.
        </motion.p>
      </div>
    </section>
  );
}
