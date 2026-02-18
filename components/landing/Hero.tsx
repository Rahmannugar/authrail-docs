"use client";

import { motion } from "motion/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden perspective-1000">
      {/* Background Effects */}
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#020202]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500/20 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 opacity-20 blur-[100px]"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
        >
          <span className="text-[#ff6a00]">Deterministic</span> authorization{" "}
          <br />
          <span className="text-zinc-400">for web applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          <span className="font-semibold text-white">
            <span className="text-[#ff6a00]">Auth</span>Rail
          </span>{" "}
          is a framework-agnostic, deterministic policy engine that evaluates
          composable middleware in strict order and returns a single decision:
          allow, deny, or redirect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/docs"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-bold text-base hover:scale-105 hover:bg-zinc-200 transition-all duration-300 cursor-pointer"
          >
            Read the Docs
          </Link>

          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <button
                onClick={() => {
                  navigator.clipboard.writeText("npm i authrail");
                }}
                className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-black border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                <span className="font-mono text-zinc-400 text-sm">
                  $ npm i authrail
                </span>
                <svg
                  className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors"
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
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
