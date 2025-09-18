import React from "react";
import { motion } from "framer-motion";
import {
  Eye, Zap, Layers, BarChart2, GitBranch, PlayCircle, Code, Info, ExternalLink, BookOpen, Settings, Share2, Search
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-pink-500 dark:text-yellow-400 animate-bounce" />, 
    title: "Real-time Simulation",
    desc: "Apply gates to qubits and instantly see the updated quantum state. State vectors and Bloch spheres refresh dynamically.",
    link: "https://www.google.com/search?q=real+time+quantum+simulation"
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-500 dark:text-cyan-300 animate-pulse" />,
    title: "Multi-Qubit Support",
    desc: "Supports 1 to n qubits, with state space dimension 2^n. Displays full state vector and probability distributions.",
    link: "https://www.google.com/search?q=multi+qubit+system"
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-green-500 dark:text-emerald-400 animate-spin-slow" />,
    title: "Visualization Options",
    desc: "Amplitude Bar Chart, Phase Coloring, Bloch Sphere, and Circuit Timeline for stepwise playback.",
    link: "https://www.google.com/search?q=quantum+state+visualization"
  },
  {
    icon: <Code className="w-8 h-8 text-purple-500 dark:text-fuchsia-400 animate-bounce" />,
    title: "Export & Integration",
    desc: "Export circuits as OpenQASM or Qiskit code. Share interactive circuit links.",
    link: "https://www.google.com/search?q=OpenQASM+Qiskit+export"
  },
  {
    icon: <Settings className="w-8 h-8 text-amber-500 dark:text-amber-300 animate-spin" />,
    title: "Noise Models (optional)",
    desc: "Apply depolarizing, phase-damping, or bit-flip errors to simulate real hardware conditions.",
    link: "https://www.google.com/search?q=quantum+noise+models"
  }
];

const keywordLink = (word, url, wiki) => (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-cyan-300 hover:text-pink-500 inline-flex items-center gap-1">{word}<Search className="w-3 h-3 inline ml-1" /></a>
    <a href={wiki} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-purple-500 hover:text-amber-500 inline-flex items-center gap-1">Wikipedia<ExternalLink className="w-3 h-3 inline" /></a>
  </>
);

export default function RealTime({ darkMode }) {
  return (
    <section className={`min-h-screen py-20 px-4 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2">
            <Eye className="w-10 h-10 text-pink-500 dark:text-cyan-400 animate-pulse" />
            Real-time Visualization
          </span>
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The Quantum State Visualization Engine allows users to interactively simulate and observe how quantum states evolve as gates are applied. With real-time updates, it helps learners, researchers, and developers understand the dynamics of {keywordLink("superposition", "https://www.google.com/search?q=quantum+superposition", "https://en.wikipedia.org/wiki/Quantum_superposition")} , {keywordLink("entanglement", "https://www.google.com/search?q=quantum+entanglement", "https://en.wikipedia.org/wiki/Quantum_entanglement")} , and {keywordLink("measurement", "https://www.google.com/search?q=quantum+measurement", "https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics")}.
        </motion.p>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="rounded-2xl bg-gradient-to-br from-pink-100/80 to-cyan-100/60 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl flex flex-col gap-4 items-center" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img src="/6874082.jpg" alt="Quantum Visualization" className="rounded-xl w-48 h-48 object-cover shadow-lg mb-4 border-4 border-pink-200 dark:border-cyan-700" />
            <div className="flex flex-wrap gap-2 justify-center">
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold shadow hover:from-cyan-500 hover:to-pink-500 transition-all flex items-center gap-2"><PlayCircle className="w-5 h-5" />Play Circuit</button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-amber-500 transition-all flex items-center gap-2"><GitBranch className="w-5 h-5" />Step Forward</button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow hover:from-purple-500 hover:to-cyan-500 transition-all flex items-center gap-2"><Share2 className="w-5 h-5" />Share</button>
            </div>
          </motion.div>
          <motion.div className="rounded-2xl bg-gradient-to-br from-cyan-100/80 to-pink-100/60 dark:from-gray-900 dark:to-gray-800 p-8 shadow-xl flex flex-col gap-4" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><Info className="w-6 h-6 text-pink-400 mt-1" /> <span>Single-qubit and multi-qubit systems</span></li>
              <li className="flex items-start gap-3"><Zap className="w-6 h-6 text-yellow-400 mt-1" /> <span>Standard quantum gates ({keywordLink("X, Y, Z, H, CNOT, SWAP, Toffoli, rotation gates", "https://www.google.com/search?q=quantum+gates", "https://en.wikipedia.org/wiki/Quantum_logic_gate")})</span></li>
              <li className="flex items-start gap-3"><BarChart2 className="w-6 h-6 text-green-400 mt-1" /> <span>State vector and probability distribution visualization</span></li>
              <li className="flex items-start gap-3"><Eye className="w-6 h-6 text-cyan-400 mt-1" /> <span>Bloch sphere representation for individual qubits</span></li>
              <li className="flex items-start gap-3"><PlayCircle className="w-6 h-6 text-purple-400 mt-1" /> <span>Interactive circuit building with step-by-step playback</span></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Key Features</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((f, i) => (
            <motion.div key={f.title} className="rounded-2xl bg-white/80 dark:bg-gray-900/60 shadow-lg border border-pink-100 dark:border-cyan-900 p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}>
              {f.icon}
              <h3 className="text-xl font-semibold text-pink-600 dark:text-cyan-300 text-center">{f.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{f.desc}</p>
              <a href={f.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:text-pink-500 underline flex items-center gap-1">Learn More<Search className="w-3 h-3 inline" /></a>
            </motion.div>
          ))}
        </div>

        <motion.div className="rounded-2xl bg-gradient-to-br from-pink-100/80 to-cyan-100/60 dark:from-gray-800 dark:to-gray-900 p-8 shadow-xl flex flex-col gap-4 items-center mb-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-pink-600 dark:text-cyan-300 flex items-center gap-2"><BookOpen className="w-7 h-7" /> Export & Integration</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow hover:from-cyan-500 hover:to-purple-500 transition-all flex items-center gap-2"><Code className="w-5 h-5" />Export as QASM</button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white font-semibold shadow hover:from-pink-500 hover:to-amber-500 transition-all flex items-center gap-2"><Share2 className="w-5 h-5" />Share Circuit</button>
          </div>
        </motion.div>

        <motion.div className="rounded-2xl bg-gradient-to-br from-cyan-100/80 to-pink-100/60 dark:from-gray-900 dark:to-gray-800 p-8 shadow-xl flex flex-col gap-4 items-center mb-12" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-300 flex items-center gap-2"><Settings className="w-7 h-7" /> Noise Models</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><span className="font-semibold">Depolarizing</span> <a href="https://www.google.com/search?q=depolarizing+noise+quantum" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-500"><Search className="w-3 h-3 inline" /></a></li>
            <li className="flex items-center gap-2"><span className="font-semibold">Phase-damping</span> <a href="https://www.google.com/search?q=phase+damping+noise+quantum" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-500"><Search className="w-3 h-3 inline" /></a></li>
            <li className="flex items-center gap-2"><span className="font-semibold">Bit-flip</span> <a href="https://www.google.com/search?q=bit+flip+noise+quantum" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-500"><Search className="w-3 h-3 inline" /></a></li>
          </ul>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="https://en.wikipedia.org/wiki/Quantum_computing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-cyan-500 hover:to-pink-500 transition-all text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Wikipedia Reference
          </a>
        </div>
      </div>
    </section>
  );
}
