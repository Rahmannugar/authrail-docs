"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-white/5"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-0 group cursor-pointer z-50 relative"
          >
            <div className="relative w-14 h-14 hover:scale-110 transition-transform duration-300">
              <Image
                src="/authrail.png"
                alt="AuthRail"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-bold text-xl tracking-tighter ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              <span className={scrolled ? "text-[#d45100]" : "text-black"}>
                Auth
              </span>
              <span className="group-hover:opacity-80 transition-colors">
                Rail
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/Rahmannugar/auth-rail"
              target="_blank"
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium cursor-pointer ${
                scrolled
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-black/10 bg-black/5 text-black hover:bg-black/10"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Star on GitHub</span>
            </a>

            <Link
              href="/docs"
              className={`px-4 py-2 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm cursor-pointer ${
                scrolled ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden z-50 p-2 transition-colors ${
              scrolled || mobileMenuOpen
                ? "text-white hover:text-white/60"
                : "text-black hover:text-black/60"
            }`}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6">
              <Link
                href="/docs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white/90 hover:text-white border-b border-white/10 pb-4"
              >
                Documentation
              </Link>
              <a
                href="https://github.com/Rahmannugar/auth-rail"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white/90 hover:text-white border-b border-white/10 pb-4"
              >
                GitHub
              </a>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/docs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-4 rounded-full bg-white text-black font-bold text-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
