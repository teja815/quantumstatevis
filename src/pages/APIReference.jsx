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
  FileText,
  Cpu,
} from "lucide-react";

export default function APIReference({ darkMode }) {
  const endpoints = [
    {
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-cyan-400" />,
      title: "Simulation Endpoint",
      method: "POST",
      path: "/api/simulate",
      desc: "Simulates a quantum circuit with a given number of qubits, initial state, and list of gates. Returns Bloch vectors, probabilities, entropies, and the full state vector.",
      request: `{
  "numQubits": 2,
  "initState": "01",
  "gates": ["H(0)", "CNOT(0,1)"]
}`,
      response: `{
  "qubits": [
    { 
      "index": 0, 
      "bloch": [0.0,0.0,0.0], 
      "entropy": 1.0, 
      "purity": 0.5, 
      "probabilities": {"0":0.5,"1":0.5},
      "density_matrix": [[[0.5,0.0],[0.0,0.0]],[[0.0,0.0],[0.5,0.0]]] 
    }
  ],
  "full_state_vector": [[0.707,0.0],[0.0,0.0],[0.0,0.0],[0.707,0.0]]
}`,
      params: [
        {
          name: "numQubits",
          type: "int",
          desc: "Total number of qubits in the quantum system.",
          link: "https://www.google.com/search?q=qubit",
        },
        {
          name: "initState",
          type: "string",
          desc: "Initial state of the quantum system (e.g. '0', '1', '01').",
          link: "https://www.google.com/search?q=quantum+state",
        },
        {
          name: "gates",
          type: "list of strings",
          desc: "Quantum gates applied in sequential order.",
          link: "https://www.google.com/search?q=quantum+gate",
        },
      ],
      supported: [
        {
          label: "Single-qubit gates",
          gates: ["I", "X", "Y", "Z", "H", "S", "Sd", "T", "Td"],
          link: "https://en.wikipedia.org/wiki/Quantum_logic_gate",
        },
        { 
          label: "Rotation gates", 
          gates: ["Rx(theta,q)", "Ry(theta,q)", "Rz(theta,q)"] 
        },
        { 
          label: "Two-qubit gates", 
          gates: ["CNOT(control,target)", "CZ(control,target)", "SWAP(q1,q2)"] 
        },
        { 
          label: "Three-qubit gate", 
          gates: ["TOFFOLI(control1, control2, target)"] 
        },
      ],
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-600 dark:text-cyan-300" />,
      title: "Reduced Density Matrix Endpoint",
      method: "POST",
      path: "/api/reduce",
      desc: "Returns the reduced density matrix of specified qubits in the quantum system for subsystem analysis.",
      request: `{
  "numQubits": 2,
  "initState": "01",
  "gates": []
}`,
      response: `{
  "reduced_density_matrix": [[1.0,0.0],[0.0,0.0]],
  "subsystem_qubits": [0]
}`,
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-600 dark:text-amber-300" />,
      title: "Gate Recognition Endpoint",
      method: "GET",
      path: "/api/recognize/{gate}",
      desc: "Returns the matrix representation and properties of supported quantum gates.",
      request: `GET /api/recognize/H`,
      response: `{
  "gate": "H",
  "matrix": [[0.707,0.707],[0.707,-0.707]],
  "type": "single_qubit",
  "description": "Hadamard gate"
}`,
    },
  ];

  return (
    <section className={`min-h-screen py-20 px-4 ${darkMode ? "bg-gray-900" : "light-mode-theme"}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
              <BookOpen className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "light-heading"}`}>
            API <span className="gradient-text">Reference</span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "light-body"}`}>
            Complete documentation for our quantum simulation APIs, including gate operations, 
            state vectors, and visualization hooks.
          </p>
        </motion.div>

        {/* API Documentation Cards */}
        <div className="space-y-8">
          {endpoints.map((ep, i) => (
            <motion.div
              key={ep.title}
              className={`light-card overflow-hidden ${darkMode ? "bg-gray-800/60 border-gray-700" : "bg-white border-gray-200"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              {/* Card Header */}
              <div className={`p-6 border-b ${darkMode ? "border-gray-700 bg-gray-800/40" : "border-gray-200 bg-blue-50"}`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {ep.icon}
                    <div>
                      <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "light-heading"}`}>
                        {ep.title}
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      ep.method === "POST" 
                        ? darkMode 
                          ? "bg-green-900/40 text-green-300" 
                          : "bg-green-100 text-green-700"
                        : darkMode
                          ? "bg-blue-900/40 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                    }`}>
                      {ep.method}
                    </span>
                    <code className={`px-3 py-1 rounded-lg text-sm font-mono ${
                      darkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700 border"
                    }`}>
                      {ep.path}
                    </code>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-6">
                {/* Description Box */}
                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700/40" : "bg-gray-50"}`}>
                  <div className="flex items-start gap-3">
                    <Info className={`w-5 h-5 mt-0.5 flex-shrink-0 ${darkMode ? "text-cyan-400" : "text-blue-500"}`} />
                    <p className={`${darkMode ? "text-gray-300" : "light-body"}`}>
                      {ep.desc}
                    </p>
                  </div>
                </div>

                {/* Parameters Section */}
                {ep.params && (
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700/40" : "bg-gray-50"}`}>
                    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-cyan-300" : "text-gray-700"}`}>
                      Parameters
                    </h3>
                    <div className="space-y-3">
                      {ep.params.map((param) => (
                        <div key={param.name} className={`p-3 rounded border ${darkMode ? "bg-gray-600/30 border-gray-600" : "bg-white border-gray-200"}`}>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <code className={`px-3 py-1 rounded text-sm font-mono ${
                              darkMode ? "bg-gray-600 text-gray-200" : "bg-blue-50 text-blue-700"
                            }`}>
                              {param.name}
                            </code>
                            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              ({param.type})
                            </span>
                            <div className="flex gap-2 ml-auto">
                              <a
                                href={param.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1 rounded ${darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-700"}`}
                                title="Search parameter"
                              >
                                <Search className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                          <p className={`text-sm ${darkMode ? "text-gray-300" : "light-body"}`}>
                            {param.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Supported Gates Section */}
                {ep.supported && (
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700/40" : "bg-gray-50"}`}>
                    <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-cyan-300" : "text-gray-700"}`}>
                      Supported Gates
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {ep.supported.map((sg) => (
                        <div key={sg.label} className={`p-3 rounded border ${darkMode ? "bg-gray-600/30 border-gray-600" : "bg-white border-gray-200"}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`font-semibold ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                              {sg.label}
                            </span>
                            {sg.link && (
                              <a
                                href={sg.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-1 rounded ${darkMode ? "text-cyan-400 hover:text-cyan-300" : "text-blue-600 hover:text-blue-700"}`}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <div className={`font-mono text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            {sg.gates.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Request/Response Section */}
                <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700/40" : "bg-gray-50"}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Request Box */}
                    <div className={`p-4 rounded border ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Code className={`w-5 h-5 ${darkMode ? "text-green-300" : "text-green-600"}`} />
                        <h4 className={`font-semibold ${darkMode ? "text-green-300" : "text-gray-700"}`}>
                          Example Request
                        </h4>
                      </div>
                      <pre className={`light-code-block text-sm ${darkMode ? "!bg-gray-700 !text-gray-200" : ""}`}>
                        <code>{ep.request}</code>
                      </pre>
                    </div>

                    {/* Response Box */}
                    <div className={`p-4 rounded border ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart2 className={`w-5 h-5 ${darkMode ? "text-blue-300" : "text-blue-600"}`} />
                        <h4 className={`font-semibold ${darkMode ? "text-blue-300" : "text-gray-700"}`}>
                          Example Response
                        </h4>
                      </div>
                      <pre className={`light-code-block text-sm ${darkMode ? "!bg-gray-700 !text-gray-200" : ""}`}>
                        <code>{ep.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`light-card p-8 max-w-2xl mx-auto ${darkMode ? "bg-gray-800/60" : "bg-white"}`}>
            <FileText className={`w-12 h-12 mx-auto mb-4 ${darkMode ? "text-cyan-400" : "text-blue-600"}`} />
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "light-heading"}`}>
              Need More Documentation?
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "light-body"}`}>
              Explore our complete API documentation with detailed examples, error codes, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://en.wikipedia.org/wiki/Quantum_computing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all text-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Full Documentation
              </a>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-pink-500 hover:to-amber-500 transition-all text-lg"
              >
                Download SDK
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}