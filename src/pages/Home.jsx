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



    </Layout>
  );
}
