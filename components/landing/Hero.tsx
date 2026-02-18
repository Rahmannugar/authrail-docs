"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i authrail");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden perspective-1000 bg-black">
      {/* Top Part: Copy (Darker Premium Orange Background) */}
      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-6 bg-[#d45100]">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-black"
          >
            Deterministic authorization <br />
            <span className="text-black">for web applications.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md md:text-lg text-black/90 max-w-2xl mx-auto mb-0 leading-relaxed font-semibold"
          >
            AuthRail is a framework-agnostic, deterministic policy engine that
            evaluates composable middleware in strict order and returns a single
            decision: allow, deny, or redirect.
          </motion.p>
        </div>
      </div>

      {/* Bottom Part: Buttons (Black Background) */}
      <div className="bg-black w-full py-16 md:py-24 px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/docs"
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-center shadow-2xl shadow-white/5"
          >
            Read the Docs
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-orange-500/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <button
                onClick={handleCopy}
                className="relative w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-4 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-2xl"
              >
                <span className="font-mono text-zinc-300 text-sm md:text-base">
                  $ npm i authrail
                </span>
                <div className="w-5 h-5 flex items-center justify-center">
                  {copied ? (
                    <motion.svg
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  ) : (
                    <svg
                      key="copy"
                      className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
