import React, { useState, useEffect } from "react";
import { logout } from "../firebase";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import VisualizerSection from "../components/VisualizerSection";
import DocumentationSection from "../components/DocumentationSection";
import ContactSection from "../components/ContactSection";

export default function Home({ user }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const handleVisualizerClick = () => {
    window.open("https://gargija-murumulla.github.io/QSV/", "_blank");
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Layout 
      user={user} 
      onLogout={handleLogout}
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <HeroSection 
        darkMode={darkMode} 
        onVisualizerClick={handleVisualizerClick}
      />
      <AboutSection darkMode={darkMode} />
      <VisualizerSection 
        darkMode={darkMode} 
        onVisualizerClick={handleVisualizerClick}
      />
      <DocumentationSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </Layout>
  );
}