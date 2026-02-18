"use client";

import React from "react";
import { motion } from "motion/react";

const RailArchitecture = () => {
  const steps = [
    { label: "Request", color: "bg-zinc-700" },
    { label: "Auth Gate", color: "bg-blue-600" },
    { label: "Role Gate", color: "bg-purple-600" },
    { label: "Data Gate", color: "bg-orange-600" },
    { label: "Decision", color: "bg-emerald-600" },
  ];

  return (
    <div className="w-full py-24 bg-black relative max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          The Rail Architecture
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Authorization as a linear pipeline. No spaghetti code. No hidden
          jumps. Requests enter, pass through gates, and result in a
          deterministic decision.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-12">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

        {steps.map((step, i) => (
          <div
            key={i}
            className="relative z-10 flex flex-col items-center flex-1"
          >
            {/* Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className={`w-16 h-16 rounded-xl ${step.color} border-4 border-black flex items-center justify-center shadow-lg shadow-black/50`}
            >
              <div className="text-white font-mono font-bold text-lg">
                {i === 0 ? "IN" : i === steps.length - 1 ? "OUT" : i}
              </div>
            </motion.div>

            {/* Label */}
            <div className="mt-4 bg-zinc-900 border border-white/5 px-3 py-1 rounded text-xs font-mono text-zinc-400">
              {step.label}
            </div>

            {/* Connecting Arrow for mobile */}
            {i < steps.length - 1 && (
              <div className="md:hidden h-8 w-1 bg-zinc-800 my-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Visual Code Representation below */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="text-sm font-mono text-blue-400 mb-4">
            // Deterministic Flow
          </div>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Unlike policy-as-code engines that require learning a new language
            (Rego), AuthRail uses standard TypeScript functions. Each function
            is a "Gate" that must be passed.
          </p>
          <ul className="space-y-3">
            {[
              "Type-safe Context Injection",
              "Short-circuit Evaluation",
              "Zero Side Effects",
              "100% Testable Logic",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-zinc-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full"></div>
          <div className="relative bg-black border border-zinc-800 rounded-xl p-6 font-mono text-sm leading-relaxed text-zinc-300">
            <div>
              <span className="text-purple-400">const</span> rail ={" "}
              <span className="text-blue-400">createRail</span>([
            </div>
            <div className="pl-4 text-zinc-500">// 1. Check Login</div>
            <div className="pl-4">
              <span className="text-blue-300">requireAuth</span>(),
            </div>
            <div className="pl-4 text-zinc-500">// 2. Check Role</div>
            <div className="pl-4">
              <span className="text-blue-300">requireRole</span>(
              <span className="text-orange-300">"admin"</span>),
            </div>
            <div className="pl-4 text-zinc-500">// 3. Check Custom Logic</div>
            <div className="pl-4">
              <span className="text-blue-300">isResourceOwner</span>()
            </div>
            <div>]);</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RailArchitecture;
