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
            { path: "/real-time", label: "Real-Time Vizualization" },
            { path: "/community", label: "Community" },
            { path: "/getting-started", label: "Getting Started" },
            { path: "/api", label: "API Reference" },
            { path: "/tutorials", label: "Tutorials" },
            { path: "/resources", label: "Resources" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg overflow-hidden transition transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">{label}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
