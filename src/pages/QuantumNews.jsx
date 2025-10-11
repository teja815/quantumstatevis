import React, { useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Zap, Award, Building2, Rocket, ExternalLink, Calendar, Tag } from "lucide-react";

const newsCategories = [
  { id: "all", name: "All News", icon: <Newspaper className="w-4 h-4" /> },
  { id: "breakthrough", name: "Breakthroughs", icon: <Zap className="w-4 h-4" /> },
  { id: "hardware", name: "Hardware", icon: <Building2 className="w-4 h-4" /> },
  { id: "algorithms", name: "Algorithms", icon: <TrendingUp className="w-4 h-4" /> },
  { id: "industry", name: "Industry", icon: <Award className="w-4 h-4" /> },
];

const quantumNews = [
  {
    id: 1,
    category: "breakthrough",
    title: "IBM Unveils 1000+ Qubit Quantum Processor",
    description: "IBM has announced the development of Condor, a quantum processor with over 1000 qubits, marking a significant milestone in quantum computing hardware.",
    date: "2024",
    source: "IBM Research",
    link: "https://www.ibm.com/quantum",
    tags: ["IBM", "Hardware", "Qubits"],
    impact: "high"
  },
  {
    id: 2,
    category: "breakthrough",
    title: "Google Achieves Quantum Error Correction Breakthrough",
    description: "Google Quantum AI demonstrates below-threshold quantum error correction, a crucial step toward practical quantum computers with logical qubits.",
    date: "2024",
    source: "Nature",
    link: "https://www.nature.com/",
    tags: ["Google", "Error Correction", "Research"],
    impact: "high"
  },
  {
    id: 3,
    category: "algorithms",
    title: "New Quantum Algorithm Accelerates Drug Discovery",
    description: "Researchers develop quantum machine learning algorithm that speeds up molecular simulation by 1000x, promising faster drug development.",
    date: "2024",
    source: "Science Journal",
    link: "https://www.science.org/",
    tags: ["Algorithm", "Medicine", "ML"],
    impact: "medium"
  },
  {
    id: 4,
    category: "hardware",
    title: "Atom Computing Launches 1000-Qubit Neutral Atom System",
    description: "Atom Computing debuts commercial quantum system with over 1000 neutral atom qubits, offering exceptional coherence times and connectivity.",
    date: "2024",
    source: "Atom Computing",
    link: "https://atom-computing.com/",
    tags: ["Neutral Atoms", "Hardware", "Commercial"],
    impact: "high"
  },
  {
    id: 5,
    category: "industry",
    title: "Microsoft Azure Quantum Expands Cloud Access",
    description: "Microsoft expands Azure Quantum platform with new partnerships, providing cloud access to quantum hardware from multiple providers worldwide.",
    date: "2024",
    source: "Microsoft",
    link: "https://azure.microsoft.com/en-us/products/quantum",
    tags: ["Cloud", "Microsoft", "Access"],
    impact: "medium"
  },
  {
    id: 6,
    category: "breakthrough",
    title: "Room Temperature Quantum Computing Demonstrated",
    description: "Breakthrough research shows quantum coherence at room temperature using diamond nitrogen-vacancy centers, potentially eliminating cooling requirements.",
    date: "2024",
    source: "Physical Review Letters",
    link: "https://journals.aps.org/prl/",
    tags: ["Research", "Materials", "Temperature"],
    impact: "high"
  },
  {
    id: 7,
    category: "industry",
    title: "Quantum Computing Market to Reach $125B by 2030",
    description: "Market analysis predicts quantum computing industry growth to $125 billion by 2030, driven by enterprise adoption and government investment.",
    date: "2024",
    source: "Market Research",
    link: "https://www.marketsandmarkets.com/",
    tags: ["Market", "Investment", "Growth"],
    impact: "medium"
  },
  {
    id: 8,
    category: "algorithms",
    title: "Quantum AI Solves Complex Optimization Problems",
    description: "DeepMind and Google collaborate on quantum-enhanced AI achieving unprecedented results in combinatorial optimization challenges.",
    date: "2024",
    source: "DeepMind",
    link: "https://www.deepmind.com/",
    tags: ["AI", "Optimization", "Google"],
    impact: "high"
  },
  {
    id: 9,
    category: "hardware",
    title: "Intel Announces Silicon Spin Qubit Breakthrough",
    description: "Intel demonstrates hot silicon spin qubits operating at higher temperatures, bringing quantum computing closer to conventional chip manufacturing.",
    date: "2024",
    source: "Intel Labs",
    link: "https://www.intel.com/content/www/us/en/research/quantum-computing.html",
    tags: ["Intel", "Silicon", "Manufacturing"],
    impact: "high"
  },
  {
    id: 10,
    category: "industry",
    title: "China Launches National Quantum Computing Initiative",
    description: "China announces $15B investment in quantum computing infrastructure and research centers across major universities and tech hubs.",
    date: "2024",
    source: "Global News",
    link: "https://www.nature.com/",
    tags: ["China", "Investment", "Policy"],
    impact: "medium"
  },
  {
    id: 11,
    category: "breakthrough",
    title: "Topological Qubits Show Promise for Fault-Tolerance",
    description: "Microsoft and research partners demonstrate topological qubits with inherent error protection, potentially revolutionizing quantum error correction.",
    date: "2024",
    source: "Microsoft Research",
    link: "https://www.microsoft.com/en-us/research/",
    tags: ["Topology", "Error Protection", "Theory"],
    impact: "high"
  },
  {
    id: 12,
    category: "algorithms",
    title: "Quantum Simulation Predicts New Material Properties",
    description: "Quantum computers successfully simulate complex materials, predicting room-temperature superconductors before laboratory synthesis.",
    date: "2024",
    source: "Materials Science",
    link: "https://www.science.org/",
    tags: ["Materials", "Simulation", "Discovery"],
    impact: "medium"
  }
];

export default function QuantumNews({ darkMode }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedNews, setExpandedNews] = useState(null);

  const filteredNews = selectedCategory === "all"
    ? quantumNews
    : quantumNews.filter(news => news.category === selectedCategory);

  return (
    <section className={`min-h-screen py-20 px-4 ${darkMode ? "bg-transparent text-gray-100" : "light-mode-theme"}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-xl border ${darkMode ? "bg-gray-800/70 border-gray-700" : "bg-blue-50 border-violet-300"}`}>
              <Newspaper className="w-10 h-10 text-purple-500 dark:text-cyan-400 animate-pulse" />
            </div>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode
              ? "text-white"
              : "bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent"}`}
          >
            Quantum Computing <span className="gradient-text">News & Innovations</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "light-body"}`}>
            Stay updated with the latest breakthroughs, developments, and innovations in quantum computing from around the world
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {newsCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg scale-105"
                  : darkMode
                  ? "bg-gray-800/70 text-gray-300 border border-gray-700 hover:bg-gray-700"
                  : "bg-white text-gray-700 border border-violet-300 hover:bg-gray-50"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news, index) => (
            <motion.div
              key={news.id}
              className={`rounded-2xl shadow-lg border overflow-hidden hover:scale-105 transition-all cursor-pointer ${
                darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-violet-300'
              } ${expandedNews === news.id ? 'ring-2 ring-purple-500' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              onClick={() => setExpandedNews(expandedNews === news.id ? null : news.id)}
            >
              <div className={`p-1 ${
                news.impact === "high"
                  ? "bg-gradient-to-r from-red-500 to-orange-500"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500"
              }`}>
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-white text-xs font-semibold flex items-center gap-1">
                    <Rocket className="w-3 h-3" />
                    {news.impact === "high" ? "HIGH IMPACT" : "FEATURED"}
                  </span>
                  <span className="text-white text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {news.date}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-cyan-300" : "text-blue-700"}`}>
                  {news.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "light-body"}`}>
                  {news.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {news.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                        darkMode ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className={`text-xs font-semibold ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {news.source}
                  </span>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                      darkMode
                        ? "text-cyan-400 hover:text-cyan-300"
                        : "text-blue-600 hover:text-blue-700"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-xl ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              No news found in this category
            </p>
          </div>
        )}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={`p-8 rounded-2xl shadow-lg border ${
            darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white border-violet-300'
          }`}>
            <TrendingUp className={`w-12 h-12 mx-auto mb-4 ${darkMode ? "text-cyan-400" : "text-blue-600"}`} />
            <h3 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "light-heading"}`}>
              Stay Connected
            </h3>
            <p className={`mb-6 ${darkMode ? "text-gray-300" : "light-body"}`}>
              Follow these resources for the latest quantum computing news and research
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://quantumcomputingreport.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all"
              >
                Quantum Computing Report
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://www.nature.com/subjects/quantum-information"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all"
              >
                Nature Quantum Info
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://arxiv.org/list/quant-ph/recent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all"
              >
                arXiv Quantum Physics
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
