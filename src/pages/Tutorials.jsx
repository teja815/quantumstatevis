import React from "react";
import { motion } from "framer-motion";

export default function Tutorials({ darkMode }) {
  const tutorials = [
    {
      title: "Quantum Computing Primer",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PLnK6MrIqGXsJfcBdppW3CKJ858zR8P4eP&si=3R8py_nO6EfyQPD2",
      embed: "https://www.youtube.com/embed/videoseries?list=PLnK6MrIqGXsJfcBdppW3CKJ858zR8P4eP",
    },
    {
      title: "Quantum Computing Course (Full Playlist)",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PLxP0p--aBHmIe--9rczWe4AZmw03e2bz0&si=wNaqK7MVK6dboznr",
      embed: "https://www.youtube.com/embed/videoseries?list=PLxP0p--aBHmIe--9rczWe4AZmw03e2bz0",
    },
    
    {
      title: "Qiskit Global Summer School",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR&si=qxSX_5JXA9ky_cii",
      embed: "https://www.youtube.com/embed/videoseries?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR",
    },
    {
      title: "MIT Quantum Information Science Lectures",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PLm3J0oaFux3bF48kurxGR6jrmPaQf6lkN&si=aHbPaDeVoAUvGtMY",
      embed: "https://www.youtube.com/embed/videoseries?list=PLm3J0oaFux3bF48kurxGR6jrmPaQf6lkN",
    },
    {
      title: "Quantum Mechanics & Computing Foundations",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PL1826E60FD05B44E4&si=kcTRSKRlZQh0muI0",
      embed: "https://www.youtube.com/embed/videoseries?list=PL1826E60FD05B44E4",
    },
    {
      title: "Advanced Quantum Algorithms",
      platform: "YouTube Playlist",
      link: "https://youtube.com/playlist?list=PLHO7IP-WvJpkFov3W_Ua48NTvQBeOFKyg&si=DHm6Ik1265sypiEw",
      embed: "https://www.youtube.com/embed/videoseries?list=PLHO7IP-WvJpkFov3W_Ua48NTvQBeOFKyg",
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 px-6 ${
        darkMode ? "bg-transparent text-gray-100" : "light-mode-theme"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent"}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tutorials
        </motion.h1>
        <p className={darkMode ? "text-gray-300" : "light-body"}>
          Step-by-step guides for building quantum algorithms and circuits,
          complete with interactive examples.
        </p>

        {/* Tutorials grid with embed mode */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {tutorials.map((tut, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 border ${
                darkMode ? "bg-gray-800/70 border-gray-700" : "bg-white border-violet-300"
              }`}
              whileHover={{ y: -5 }}
            >
              {/* YouTube Embed */}
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src={tut.embed}
                  title={tut.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-cyan-300" : "text-blue-700"}`}>{tut.title}</h3>
                <p className={`text-sm mb-3 ${darkMode ? "text-gray-400" : "light-body"}`}>{tut.platform}</p>
                <motion.a
                  href={tut.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center px-4 py-2 rounded-xl font-medium shadow-md transition bg-blue-600 text-white hover:bg-blue-700"
                  whileTap={{ scale: 0.95 }}
                >
                  View Playlist
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
