import React from "react";
import { logout } from "../firebase";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { Cpu, ExternalLink, Play } from "lucide-react";
// Add these import statements
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VisualizerSection from "../components/VisualizerSection";
import DocumentationSection from "../components/DocumentationSection";
import ContactSection from "../components/ContactSection";


export default function Home({ user, darkMode, toggleDarkMode }) {
  const handleVisualizerClick = () => {
    window.open("https://gargija-murumulla.github.io/QSV/", "_blank");
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <Layout
      user={user}
      onLogout={handleLogout}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    >


      {/* Existing Sections */}
      <HeroSection darkMode={darkMode} onVisualizerClick={handleVisualizerClick} />
      <AboutSection darkMode={darkMode} />

      <VisualizerSection
        darkMode={darkMode}
        onVisualizerClick={handleVisualizerClick}
        showAmplitudeCard={true}
      />

      <DocumentationSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />

      {/* State Amplitude to Circuit Generator Card */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              State Amplitude to <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Circuit Generator</span>
            </h2>
            <p className={`text-xl mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Generate quantum circuits from your desired state amplitudes. Instantly visualize the circuit that prepares your custom quantum state.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/80 dark:bg-gray-900/60 shadow-lg border border-pink-100 dark:border-cyan-900 p-8 flex flex-col items-center gap-6 max-w-xl mx-auto mb-8"
          >
            <Cpu className="w-16 h-16 text-pink-500 dark:text-cyan-400 animate-pulse" />
            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>State Amplitude to Circuit Generator</h3>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Input your target quantum state amplitudes and get a step-by-step quantum circuit that prepares it. Great for learning, research, and experimentation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://gargija-murumulla.github.io/QSV/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-600 text-white rounded-xl font-semibold text-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔹 New Section: Quick Navigation Buttons */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 bg-clip-text text-transparent">
          Explore More
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { path: "/learn", label: "Learn More" },
            { path: "/view-demo", label: "View Demo" },
            { path: "/quantum-mech", label: "Quantum Mechanics" },
            { path: "/quantum-computing", label: "Quantum Computing" },
            { path: "/real-time", label: "Real-Time Viz" },
            { path: "/community", label: "Community" },
            { path: "/getting-started", label: "Getting Started" },
            { path: "/api", label: "API Reference" },
            { path: "/tutorials", label: "Tutorials" },
            { path: "/resources", label: "Resources" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="bg-gradient-to-r from-amber-200/70 via-orange-200/70 to-pink-200/70 dark:from-orange-900/70 dark:via-rose-900/70 dark:to-amber-900/70
              hover:from-amber-300/80 hover:via-orange-300/80 hover:to-pink-300/80
              dark:hover:from-orange-800/80 dark:hover:via-rose-800/80 dark:hover:to-amber-800/80
              text-black dark:text-white font-semibold py-3 px-4 rounded-lg text-center
              transition transform hover:scale-105 shadow-lg hover:shadow-xl
"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
