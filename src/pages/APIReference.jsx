import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Code,
  Layers,
  BookOpen,
  Info,
  ExternalLink,
  Search,
  BarChart2,
} from "lucide-react";

export default function APIReference({ darkMode }) {
  const endpoints = [
    {
      icon: <Server className="w-8 h-8 text-purple-500 dark:text-cyan-400" />,
      title: "Simulation Endpoint",
      method: "POST",
      path: "/simulate",
      desc: "Simulates a quantum circuit with a given number of qubits, initial state, and list of gates. Returns Bloch vectors, probabilities, entropies, and the full state vector.",
      request: `{
  "numQubits": 2,
  "initState": "01",
  "gates": ["H(0)", "CNOT(0,1)"]
}`,
      response: `{
  "qubits": [
    { "index": 0, "bloch": [0.0,0.0,0.0], "entropy": 1.0, "purity": 0.5, "probabilities": {"0":0.5,"1":0.5}, "density_matrix": [[[0.5,0.0],[0.0,0.0]],[[0.0,0.0],[0.5,0.0]]] },
    { "index": 1, "bloch": [0.0,0.0,0.0], "entropy": 1.0, "purity": 0.5, "probabilities": {"0":0.5,"1":0.5}, "density_matrix": [[[0.5,0.0],[0.0,0.0]],[[0.0,0.0],[0.5,0.0]]] }
  ],
  "full_state_vector": [[0.707,0.0],[0.0,0.0],[0.0,0.0],[0.707,0.0]]
}`,
      params: [
        {
          name: "numQubits",
          type: "int",
          desc: "Total number of qubits.",
          link: "https://www.google.com/search?q=qubit",
        },
        {
          name: "initState",
          type: "string",
          desc: "Initial state of the system (e.g. '0', '1', '01').",
          link: "https://www.google.com/search?q=quantum+state",
        },
        {
          name: "gates",
          type: "list of strings",
          desc: "Gates applied in sequence.",
          link: "https://www.google.com/search?q=quantum+gate",
        },
      ],
      supported: [
        {
          label: "Single-qubit gates",
          gates: ["I", "X", "Y", "Z", "H", "S", "Sd", "T", "Td"],
          link: "https://en.wikipedia.org/wiki/Quantum_logic_gate",
        },
        { label: "Rotation gates", gates: ["Rx(theta,q)", "Ry(theta,q)", "Rz(theta,q)"] },
        { label: "Two-qubit gates", gates: ["CNOT(control,target)", "CZ(control,target)", "SWAP(q1,q2)"] },
        { label: "Three-qubit gate", gates: ["TOFFOLI(control1, control2, target)"] },
      ],
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500 dark:text-cyan-300" />,
      title: "Reduced Density Matrix Endpoint",
      method: "POST",
      path: "/reduce",
      desc: "Returns the reduced density matrix of the first qubit in the system.",
      request: `{
  "numQubits": 2,
  "initState": "01",
  "gates": []
}`,
      response: `{
  "reduced": [[1.0,0.0],[0.0,0.0]]
}`,
    },
    {
      icon: <Code className="w-8 h-8 text-green-500 dark:text-amber-300" />,
      title: "Gate Recognition Endpoint",
      method: "GET",
      path: "/recognize/{gate}",
      desc: "Returns the matrix representation of a supported gate.",
      request: `GET /recognize/H`,
      response: `{
  "matrix": [[0.707,0.707],[0.707,-0.707]]
}`,
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 px-4 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="inline-flex items-center gap-2">
            <BookOpen className="w-10 h-10 text-purple-500 dark:text-cyan-400 animate-pulse" />
            API Reference
          </span>
        </motion.h1>

        <motion.p
          className="text-xl max-w-3xl mx-auto text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Complete documentation for our quantum simulation APIs, including gate
          operations, state vectors, and visualization hooks.{" "}
          <span className="ml-2">🔗</span>
        </motion.p>

        <div className="space-y-16">
          {endpoints.map((ep, i) => (
            <motion.div
              key={ep.title}
              className="bg-white/80 dark:bg-gray-900/60 rounded-2xl shadow-xl border border-purple-100 dark:border-gray-800 p-8 hover:scale-[1.02] transition-transform group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {ep.icon}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  {ep.title}
                </h2>
                <span
                  className={`ml-auto px-3 py-1 rounded-full text-xs font-semibold ${
                    ep.method === "POST"
                      ? "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  }`}
                >
                  {ep.method}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                  {ep.path}
                </span>
              </div>

              <p className="mb-4 text-gray-700 dark:text-gray-300 text-lg flex items-center gap-2">
                <Info className="w-4 h-4 text-purple-400 inline mr-1" />
                {ep.desc}
              </p>

              {ep.params && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-purple-700 dark:text-cyan-300">
                    Parameters
                  </h3>
                  <ul className="space-y-1">
                    {ep.params.map((param) => (
                      <li key={param.name} className="flex items-center gap-2">
                        <span className="font-mono text-sm bg-purple-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                          {param.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({param.type})
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {param.desc}
                        </span>
                        <a
                          href={param.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-blue-500 hover:text-pink-500"
                        >
                          <Search className="w-3 h-3 inline" />
                        </a>
                        <a
                          href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                            param.name
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-purple-500 hover:text-amber-500"
                        >
                          <ExternalLink className="w-3 h-3 inline" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {ep.supported && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-purple-700 dark:text-cyan-300">
                    Supported Gates
                  </h3>
                  <ul className="space-y-1">
                    {ep.supported.map((sg) => (
                      <li key={sg.label} className="flex items-center gap-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                          {sg.label}:
                        </span>
                        <span className="font-mono text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                          {sg.gates.join(", ")}
                        </span>
                        {sg.link && (
                          <a
                            href={sg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-blue-500 hover:text-pink-500"
                          >
                            <ExternalLink className="w-3 h-3 inline" />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2 text-pink-600 dark:text-pink-300 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Example Request
                  </h4>
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm text-left overflow-x-auto border border-gray-200 dark:border-gray-700">
                    <code>{ep.request}</code>
                  </pre>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-300 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4" />
                    Example Response
                  </h4>
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm text-left overflow-x-auto border border-gray-200 dark:border-gray-700">
                    <code>{ep.response}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://en.wikipedia.org/wiki/Quantum_computing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all text-lg"
          >
            <ExternalLink className="w-5 h-5" />
            Learn More on Wikipedia
          </a>
        </div>
      </div>
    </section>
  );
}
