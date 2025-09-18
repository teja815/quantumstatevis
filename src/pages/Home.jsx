import React from "react";
import { logout } from "../firebase";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VisualizerSection from "../components/VisualizerSection";
import DocumentationSection from "../components/DocumentationSection";
import ContactSection from "../components/ContactSection";
import QuantumComputingIntro from "./QuantumComputingIntro";

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
