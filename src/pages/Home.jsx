import React, { useState } from "react";
import { logout } from "../firebase";

// If your image is inside "public/quantum-computing.png"
// just use src="/quantum-computing.png"

export default function Home({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const rakesh = () => {
    window.location.href = "https://gargija-murumulla.github.io/QSV/";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="flex items-center gap-2">
          <img src="/quantum-computing.png" alt="Logo" className="w-10 h-auto" />
          <h1 className="text-xl font-bold">Quantum Bucket</h1>
        </div>

        <div className="flex items-center gap-4">
          <span>{user?.displayName}</span>
          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Body with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-100 w-64 p-4 space-y-4 md:block ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#about" className="block p-2 hover:bg-green-300 rounded">
            About
          </a>
          <a href="#contact" className="block p-2 hover:bg-green-300 rounded">
            Contact Us
          </a>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-orange-300">
          <h2 className="text-2xl font-bold mb-4">Home Page</h2>
          <p className="mb-6">Welcome to the default home page content.</p>

          <div>
            <button
              onClick={rakesh}
              className="bg-green-500 px-3 py-1 rounded-lg"
            >
              Visualizer
            </button>
          </div>

          <section id="about" className="mb-6">
            <h3 className="text-xl font-semibold">About</h3>
            <p>This is the about section.</p>
          </section>

          <section id="contact">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>Email: contact@mywebsite.com</p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </footer>
    </div>
  );
}
