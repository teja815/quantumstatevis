import React from "react";
import { motion } from "framer-motion";

export default function LearnMore({ darkMode }) {
  return (
    <section
      className={`min-h-screen py-20 px-6 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn More:{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Quantum State Visualizer
          </span>
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          This page explains how quantum gates work, how qubits evolve, and how
          multi-qubit systems interact. Each gate operation can be visualized
          with animations and circuit diagrams, giving you a deep understanding
          of quantum mechanics in action.
        </motion.p>

        <div
          className={`p-8 rounded-2xl shadow-xl ${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Quantum Gates</h2>
          <p>
            Visualize Hadamard, Pauli-X, CNOT, and more with interactive
            diagrams. Each gate shows how quantum states transform mathematically
            and visually.
          </p>
        </div>
      </div>
    </section>
  );
}
