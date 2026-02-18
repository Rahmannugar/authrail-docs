"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "@/components/landing/LoadingScreen";

const Home = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <main className="min-h-screen flex flex-col bg-black text-white selection:bg-orange-500/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;
