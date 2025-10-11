import React from "react";
import { motion } from "framer-motion";
import { Users, ExternalLink, Search, Info } from "lucide-react";

const people = [
  {
    name: "Peter Shor",
    img: "/peter shor.png",
    info: "Inventor of Shor’s algorithm for factoring; pioneer in quantum error correction.",
    google: "https://www.google.com/search?q=Peter+Shor",
    wiki: "https://en.wikipedia.org/wiki/Peter_Shor"
  },
  {
    name: "John Preskill",
    img: "/John_Preskill.jpg",
    info: "Coined the term 'Quantum Supremacy'; professor at Caltech.",
    google: "https://www.google.com/search?q=John+Preskill",
    wiki: "https://en.wikipedia.org/wiki/John_Preskill"
  },
  {
    name: "Lov Grover",
    img: "/lov-grover.jpeg",
    info: "Creator of Grover’s search algorithm; Bell Labs researcher.",
    google: "https://www.google.com/search?q=Lov+Grover",
    wiki: "https://en.wikipedia.org/wiki/Lov_Grover"
  },
  {
    name: "Michelle Simmons",
    img: "/Michele_Simmons.jpg",
    info: "Leader in silicon-based quantum computing; Australian Research Council Laureate Fellow.",
    google: "https://www.google.com/search?q=Michelle+Simmons",
    wiki: "https://en.wikipedia.org/wiki/Michelle_Simmons"
  },
  
];


const keywordLink = (word, url, wiki) => (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-cyan-300 hover:text-pink-500 inline-flex items-center gap-1">{word}<Search className="w-3 h-3 inline ml-1" /></a>
    <a href={wiki} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-purple-500 hover:text-amber-500 inline-flex items-center gap-1">Wikipedia<ExternalLink className="w-3 h-3 inline" /></a>
  </>
);

export default function Community({ darkMode }) {
  return (
    <section className={`min-h-screen py-20 px-4 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}>
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2">
            <Users className="w-10 h-10 text-purple-500 dark:text-cyan-400 animate-pulse" />
            Global Community
          </span>
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto text-center mb-10 text-purple-800 dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join researchers and enthusiasts from around the world in quantum exploration.<br />
          Connect, collaborate, and learn about {keywordLink("quantum computing", "https://www.google.com/search?q=quantum+computing", "https://en.wikipedia.org/wiki/Quantum_computing")}, {keywordLink("entanglement", "https://www.google.com/search?q=quantum+entanglement", "https://en.wikipedia.org/wiki/Quantum_entanglement")}, and {keywordLink("superposition", "https://www.google.com/search?q=quantum+superposition", "https://en.wikipedia.org/wiki/Quantum_superposition")}. 
        </motion.p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              className={`rounded-2xl ${darkMode ? 'bg-gray-500' : 'bg-white/80'} shadow-lg border ${darkMode ? 'border-cyan-900' : 'border-purple-100'} p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <img src={person.img} alt={person.name} className={`w-24 h-24 rounded-full object-cover border-4 ${darkMode ? 'border-cyan-500' : 'border-purple-300'} shadow-lg mb-2`} />
              <h3 className="text-lg font-semibold text-purple-700 dark:text-cyan-300 text-center">{person.name}</h3>
              <p className="text-gray-800 dark:text-gray-300 text-center text-sm mb-2 flex items-center gap-1"><Info className="w-4 h-4 text-purple-400 inline" />{person.info}</p>
              <div className="flex gap-2">
                <a href={person.google} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-pink-500 underline flex items-center gap-1">Google<Search className="w-3 h-3 inline" /></a>
                <a href={person.wiki} target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-amber-500 underline flex items-center gap-1">Wikipedia<ExternalLink className="w-3 h-3 inline" /></a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="https://en.wikipedia.org/wiki/Quantum_community"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Wikipedia Reference
          </a>
        </div>
      </div>
    </section>
  );
}
